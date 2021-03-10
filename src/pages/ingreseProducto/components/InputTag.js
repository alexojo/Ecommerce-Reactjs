import React, { useRef, useState, Component} from "react"
import styles from '../stylesheets/InputTag.sass'

var array_tags=[];
const TagsInput = (props) => {
	const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	array_tags=[]
	tags.map((tag)=>{
		array_tags.push(tag)
	})
	//console.log(array_tags)


	
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
						
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Ingresa los tags de tu producto"
	
			/>		
		</div>
	);
};

const InputTag = () => {
	const selectedTags = tags => {
		console.log(tags);
	};
	const Tags=['tag'];
	return (
        
		<div className={styles.contenedor}>
			Hashtag
			<TagsInput selectedTags={selectedTags}  tags={Tags}/>
		</div>
	);
};

export {InputTag,array_tags}


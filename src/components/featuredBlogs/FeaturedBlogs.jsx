import React from "react";
import classes from "./featuredBlogs.module.css";
import mountainImg1 from "../../assets/mountain1.jpg";
import mountainImg2 from "../../assets/mountain2.jpg";
import { MdOutlinePreview } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
const FeaturedBlogs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h3>Featured Blogs</h3>
        <div className={classes.blogs}>
          <div className={classes.left}>
            <div className={classes.mainBlog}>
              <img src={mountainImg1} alt="" />
              <div className={classes.mainBlogData}>
                <div className={classes.categoryAndMetadata}>
                  <span className={classes.category}>Nature</span>
                  <div className={classes.metadata}>
                    <MdOutlinePreview /> 123 views
                  </div>
                  <div className={classes.metadata}>
                    <AiFillLike /> 100 likes
                  </div>
                </div>
                <h4>Blog 1 title</h4>
                <p className={classes.desc}>
                  Hey there, fellow adventurers! Welcome back to my channel !
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author: </span> Fatima{" "}
                  </span>
                  <span>
                    <span>Created: </span> 17/03/2024{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 title </h4>
                <p className={classes.desc}>
                  Hey, fellow nature enthusiasts! Welcome back to my channel.
                  Today, I'm bringing you along on a soul-reviving journey
                  through the majestic mountains. Get ready to immerse yourself
                  in the tranquility and beauty of these towering giants.
                  There's something truly captivating about the mountains – the
                  way they stand tall and proud, yet exude a sense of calm and
                  serenity. As I hike through these rugged landscapes, I can't
                  help but feel a deep connection to the earth beneath my feet
                  and the vast sky above. Just take a look at this panoramic
                  view! It's moments like these that remind me of the sheer
                  grandeur and magnificence of nature. From snow-capped peaks to
                  lush valleys, every corner of the mountains holds its own
                  unique charm. But it's not just about the scenery; it's about
                  the journey itself. There's a sense of adventure and discovery
                  around every bend in the trail. Whether I'm navigating rocky
                  terrain or crossing a babbling stream, each step brings me
                  closer to the heart of the mountains. Camping in the mountains
                  is a truly magical experience. There's nothing quite like
                  falling asleep to the sound of rustling leaves and waking up
                  to the gentle glow of the sunrise painting the peaks in hues
                  of pink and gold. And let's not forget about the wildlife!
                  From elusive mountain goats to majestic eagles soaring
                  overhead, encountering these creatures in their natural
                  habitat is a humbling reminder of the interconnectedness of
                  all living things. As I sit here, surrounded by the beauty of
                  the mountains, I can't help but feel a sense of gratitude for
                  this incredible planet we call home. It's moments like these
                  that remind me of the importance of preserving and protecting
                  these wild spaces for future generations to enjoy. Well,
                  that's all for today's adventure, folks. I hope you enjoyed
                  coming along on this journey with me. Until next time, keep
                  exploring, keep dreaming, and never forget to find serenity in
                  the heart of the mountains.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author:</span> Fatima
                  </span>
                  <span>
                    <span>Created:</span> 17/03/2024
                  </span>
                </div>
              </div>
            </div>
            <div className={classes.secondaryBlog}>
              <img src={mountainImg2} alt="" />
              <div className={classes.secondaryBlogData}>
                <h4>Blog 2 title </h4>
                <p className={classes.desc}>
                  Hey, fellow nature enthusiasts! Welcome back to my channel.
                  Today, I'm bringing you along on a soul-reviving journey
                  through the majestic mountains. Get ready to immerse yourself
                  in the tranquility and beauty of these towering giants.
                  There's something truly captivating about the mountains – the
                  way they stand tall and proud, yet exude a sense of calm and
                  serenity. As I hike through these rugged landscapes, I can't
                  help but feel a deep connection to the earth beneath my feet
                  and the vast sky above. Just take a look at this panoramic
                  view! It's moments like these that remind me of the sheer
                  grandeur and magnificence of nature. From snow-capped peaks to
                  lush valleys, every corner of the mountains holds its own
                  unique charm. But it's not just about the scenery; it's about
                  the journey itself. There's a sense of adventure and discovery
                  around every bend in the trail. Whether I'm navigating rocky
                  terrain or crossing a babbling stream, each step brings me
                  closer to the heart of the mountains. Camping in the mountains
                  is a truly magical experience. There's nothing quite like
                  falling asleep to the sound of rustling leaves and waking up
                  to the gentle glow of the sunrise painting the peaks in hues
                  of pink and gold. And let's not forget about the wildlife!
                  From elusive mountain goats to majestic eagles soaring
                  overhead, encountering these creatures in their natural
                  habitat is a humbling reminder of the interconnectedness of
                  all living things. As I sit here, surrounded by the beauty of
                  the mountains, I can't help but feel a sense of gratitude for
                  this incredible planet we call home. It's moments like these
                  that remind me of the importance of preserving and protecting
                  these wild spaces for future generations to enjoy. Well,
                  that's all for today's adventure, folks. I hope you enjoyed
                  coming along on this journey with me. Until next time, keep
                  exploring, keep dreaming, and never forget to find serenity in
                  the heart of the mountains.
                </p>
                <div className={classes.authorAndCreatedAt}>
                  <span>
                    <span>Author:</span> Fatima
                  </span>
                  <span>
                    <span>Created:</span> 17/03/2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;

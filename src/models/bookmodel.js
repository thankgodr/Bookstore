export default class BookModel{
    constructor(title = "", author = "", genre = ""){
        this.title = title
        this.author = author
        this.genre = genre
        this.comments = []
        this.currentChapter = 0
        this.totalChapter = 0
    }

    updateTitle(title = ""){
        this.title = title
    }
    updateAuthor(author = ""){
        this.author = author
    }
    addComment(comment = ""){
        this.comments.push(comment)
    }

    updateTotalChapter(total = 0){
        this.totalChapter = total
    }

    updateCurrentChapter(current = 0){
        this.currentChapter = current
    }
}
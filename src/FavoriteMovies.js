import React, { Component } from 'react'

class FavoriteMovies extends Component {
    render() {
        return (
            <div>
                <ol className="profile-list">
                    {this.props.profiles.map ( (profile) => (
                            <li key={profile.id} className="profile-list-item">{this.props.users[Number(profile.userID)].name}'s favorite movie is {this.props.movies[Number(profile.favoriteMovieID)].name} </li>
                        )
                    )
                    }
                </ol>
            </div>
        )
    }
}

export default FavoriteMovies
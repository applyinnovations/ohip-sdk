# ArticlePostItType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableForPostIt** | Pointer to **bool** | Indicates whether the article is available for post it. | [optional] 
**Color** | Pointer to [**ColorType**](ColorType.md) |  | [optional] 

## Methods

### NewArticlePostItType

`func NewArticlePostItType() *ArticlePostItType`

NewArticlePostItType instantiates a new ArticlePostItType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArticlePostItTypeWithDefaults

`func NewArticlePostItTypeWithDefaults() *ArticlePostItType`

NewArticlePostItTypeWithDefaults instantiates a new ArticlePostItType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableForPostIt

`func (o *ArticlePostItType) GetAvailableForPostIt() bool`

GetAvailableForPostIt returns the AvailableForPostIt field if non-nil, zero value otherwise.

### GetAvailableForPostItOk

`func (o *ArticlePostItType) GetAvailableForPostItOk() (*bool, bool)`

GetAvailableForPostItOk returns a tuple with the AvailableForPostIt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableForPostIt

`func (o *ArticlePostItType) SetAvailableForPostIt(v bool)`

SetAvailableForPostIt sets AvailableForPostIt field to given value.

### HasAvailableForPostIt

`func (o *ArticlePostItType) HasAvailableForPostIt() bool`

HasAvailableForPostIt returns a boolean if a field has been set.

### GetColor

`func (o *ArticlePostItType) GetColor() ColorType`

GetColor returns the Color field if non-nil, zero value otherwise.

### GetColorOk

`func (o *ArticlePostItType) GetColorOk() (*ColorType, bool)`

GetColorOk returns a tuple with the Color field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColor

`func (o *ArticlePostItType) SetColor(v ColorType)`

SetColor sets Color field to given value.

### HasColor

`func (o *ArticlePostItType) HasColor() bool`

HasColor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



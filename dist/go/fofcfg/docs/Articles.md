# Articles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Articles** | Pointer to [**[]ArticleInfoType**](ArticleInfoType.md) | Holds collection of articles. | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewArticles

`func NewArticles() *Articles`

NewArticles instantiates a new Articles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArticlesWithDefaults

`func NewArticlesWithDefaults() *Articles`

NewArticlesWithDefaults instantiates a new Articles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArticles

`func (o *Articles) GetArticles() []ArticleInfoType`

GetArticles returns the Articles field if non-nil, zero value otherwise.

### GetArticlesOk

`func (o *Articles) GetArticlesOk() (*[]ArticleInfoType, bool)`

GetArticlesOk returns a tuple with the Articles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticles

`func (o *Articles) SetArticles(v []ArticleInfoType)`

SetArticles sets Articles field to given value.

### HasArticles

`func (o *Articles) HasArticles() bool`

HasArticles returns a boolean if a field has been set.

### GetHotelId

`func (o *Articles) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *Articles) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *Articles) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *Articles) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *Articles) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Articles) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Articles) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Articles) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Articles) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Articles) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Articles) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Articles) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



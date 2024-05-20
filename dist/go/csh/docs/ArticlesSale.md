# ArticlesSale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioWindowDetails** | Pointer to [**[]FolioWindowType**](FolioWindowType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewArticlesSale

`func NewArticlesSale() *ArticlesSale`

NewArticlesSale instantiates a new ArticlesSale object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArticlesSaleWithDefaults

`func NewArticlesSaleWithDefaults() *ArticlesSale`

NewArticlesSaleWithDefaults instantiates a new ArticlesSale object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioWindowDetails

`func (o *ArticlesSale) GetFolioWindowDetails() []FolioWindowType`

GetFolioWindowDetails returns the FolioWindowDetails field if non-nil, zero value otherwise.

### GetFolioWindowDetailsOk

`func (o *ArticlesSale) GetFolioWindowDetailsOk() (*[]FolioWindowType, bool)`

GetFolioWindowDetailsOk returns a tuple with the FolioWindowDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowDetails

`func (o *ArticlesSale) SetFolioWindowDetails(v []FolioWindowType)`

SetFolioWindowDetails sets FolioWindowDetails field to given value.

### HasFolioWindowDetails

`func (o *ArticlesSale) HasFolioWindowDetails() bool`

HasFolioWindowDetails returns a boolean if a field has been set.

### GetLinks

`func (o *ArticlesSale) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ArticlesSale) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ArticlesSale) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ArticlesSale) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ArticlesSale) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ArticlesSale) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ArticlesSale) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ArticlesSale) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



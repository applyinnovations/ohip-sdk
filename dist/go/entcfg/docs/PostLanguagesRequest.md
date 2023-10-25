# PostLanguagesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Languages** | Pointer to [**[]ConfigLanguageType**](ConfigLanguageType.md) | This type holds a collection of languages. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostLanguagesRequest

`func NewPostLanguagesRequest() *PostLanguagesRequest`

NewPostLanguagesRequest instantiates a new PostLanguagesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostLanguagesRequestWithDefaults

`func NewPostLanguagesRequestWithDefaults() *PostLanguagesRequest`

NewPostLanguagesRequestWithDefaults instantiates a new PostLanguagesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLanguages

`func (o *PostLanguagesRequest) GetLanguages() []ConfigLanguageType`

GetLanguages returns the Languages field if non-nil, zero value otherwise.

### GetLanguagesOk

`func (o *PostLanguagesRequest) GetLanguagesOk() (*[]ConfigLanguageType, bool)`

GetLanguagesOk returns a tuple with the Languages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguages

`func (o *PostLanguagesRequest) SetLanguages(v []ConfigLanguageType)`

SetLanguages sets Languages field to given value.

### HasLanguages

`func (o *PostLanguagesRequest) HasLanguages() bool`

HasLanguages returns a boolean if a field has been set.

### GetLinks

`func (o *PostLanguagesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostLanguagesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostLanguagesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostLanguagesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostLanguagesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostLanguagesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostLanguagesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostLanguagesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



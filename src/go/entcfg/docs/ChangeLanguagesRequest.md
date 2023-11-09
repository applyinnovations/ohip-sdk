# ChangeLanguagesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Languages** | Pointer to [**ConfigLanguagesType**](ConfigLanguagesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeLanguagesRequest

`func NewChangeLanguagesRequest() *ChangeLanguagesRequest`

NewChangeLanguagesRequest instantiates a new ChangeLanguagesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeLanguagesRequestWithDefaults

`func NewChangeLanguagesRequestWithDefaults() *ChangeLanguagesRequest`

NewChangeLanguagesRequestWithDefaults instantiates a new ChangeLanguagesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLanguages

`func (o *ChangeLanguagesRequest) GetLanguages() ConfigLanguagesType`

GetLanguages returns the Languages field if non-nil, zero value otherwise.

### GetLanguagesOk

`func (o *ChangeLanguagesRequest) GetLanguagesOk() (*ConfigLanguagesType, bool)`

GetLanguagesOk returns a tuple with the Languages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLanguages

`func (o *ChangeLanguagesRequest) SetLanguages(v ConfigLanguagesType)`

SetLanguages sets Languages field to given value.

### HasLanguages

`func (o *ChangeLanguagesRequest) HasLanguages() bool`

HasLanguages returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeLanguagesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeLanguagesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeLanguagesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeLanguagesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeLanguagesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeLanguagesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeLanguagesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeLanguagesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



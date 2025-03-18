# KeywordTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeywordTypes** | Pointer to [**[]KeywordTypeType**](KeywordTypeType.md) | List of Keyword Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewKeywordTypesToBeChanged

`func NewKeywordTypesToBeChanged() *KeywordTypesToBeChanged`

NewKeywordTypesToBeChanged instantiates a new KeywordTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewKeywordTypesToBeChangedWithDefaults

`func NewKeywordTypesToBeChangedWithDefaults() *KeywordTypesToBeChanged`

NewKeywordTypesToBeChangedWithDefaults instantiates a new KeywordTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeywordTypes

`func (o *KeywordTypesToBeChanged) GetKeywordTypes() []KeywordTypeType`

GetKeywordTypes returns the KeywordTypes field if non-nil, zero value otherwise.

### GetKeywordTypesOk

`func (o *KeywordTypesToBeChanged) GetKeywordTypesOk() (*[]KeywordTypeType, bool)`

GetKeywordTypesOk returns a tuple with the KeywordTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeywordTypes

`func (o *KeywordTypesToBeChanged) SetKeywordTypes(v []KeywordTypeType)`

SetKeywordTypes sets KeywordTypes field to given value.

### HasKeywordTypes

`func (o *KeywordTypesToBeChanged) HasKeywordTypes() bool`

HasKeywordTypes returns a boolean if a field has been set.

### GetLinks

`func (o *KeywordTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *KeywordTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *KeywordTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *KeywordTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *KeywordTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *KeywordTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *KeywordTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *KeywordTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



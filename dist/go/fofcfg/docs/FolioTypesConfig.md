# FolioTypesConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioTypes** | Pointer to [**[]FolioTypeConfigType**](FolioTypeConfigType.md) | Information details of the Folio Type Names. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioTypesConfig

`func NewFolioTypesConfig() *FolioTypesConfig`

NewFolioTypesConfig instantiates a new FolioTypesConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTypesConfigWithDefaults

`func NewFolioTypesConfigWithDefaults() *FolioTypesConfig`

NewFolioTypesConfigWithDefaults instantiates a new FolioTypesConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioTypes

`func (o *FolioTypesConfig) GetFolioTypes() []FolioTypeConfigType`

GetFolioTypes returns the FolioTypes field if non-nil, zero value otherwise.

### GetFolioTypesOk

`func (o *FolioTypesConfig) GetFolioTypesOk() (*[]FolioTypeConfigType, bool)`

GetFolioTypesOk returns a tuple with the FolioTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioTypes

`func (o *FolioTypesConfig) SetFolioTypes(v []FolioTypeConfigType)`

SetFolioTypes sets FolioTypes field to given value.

### HasFolioTypes

`func (o *FolioTypesConfig) HasFolioTypes() bool`

HasFolioTypes returns a boolean if a field has been set.

### GetLinks

`func (o *FolioTypesConfig) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioTypesConfig) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioTypesConfig) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioTypesConfig) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioTypesConfig) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioTypesConfig) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioTypesConfig) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioTypesConfig) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



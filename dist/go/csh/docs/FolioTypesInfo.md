# FolioTypesInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioInfo** | Pointer to [**[]FolioTypesInfoType**](FolioTypesInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioTypesInfo

`func NewFolioTypesInfo() *FolioTypesInfo`

NewFolioTypesInfo instantiates a new FolioTypesInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioTypesInfoWithDefaults

`func NewFolioTypesInfoWithDefaults() *FolioTypesInfo`

NewFolioTypesInfoWithDefaults instantiates a new FolioTypesInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioInfo

`func (o *FolioTypesInfo) GetFolioInfo() []FolioTypesInfoType`

GetFolioInfo returns the FolioInfo field if non-nil, zero value otherwise.

### GetFolioInfoOk

`func (o *FolioTypesInfo) GetFolioInfoOk() (*[]FolioTypesInfoType, bool)`

GetFolioInfoOk returns a tuple with the FolioInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioInfo

`func (o *FolioTypesInfo) SetFolioInfo(v []FolioTypesInfoType)`

SetFolioInfo sets FolioInfo field to given value.

### HasFolioInfo

`func (o *FolioTypesInfo) HasFolioInfo() bool`

HasFolioInfo returns a boolean if a field has been set.

### GetLinks

`func (o *FolioTypesInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioTypesInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioTypesInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioTypesInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioTypesInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioTypesInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioTypesInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioTypesInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



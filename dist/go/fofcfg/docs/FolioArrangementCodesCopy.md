# FolioArrangementCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FolioArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of folio arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFolioArrangementCodesCopy

`func NewFolioArrangementCodesCopy() *FolioArrangementCodesCopy`

NewFolioArrangementCodesCopy instantiates a new FolioArrangementCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioArrangementCodesCopyWithDefaults

`func NewFolioArrangementCodesCopyWithDefaults() *FolioArrangementCodesCopy`

NewFolioArrangementCodesCopyWithDefaults instantiates a new FolioArrangementCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolioArrangementCode

`func (o *FolioArrangementCodesCopy) GetFolioArrangementCode() []CopyConfigurationCodeType`

GetFolioArrangementCode returns the FolioArrangementCode field if non-nil, zero value otherwise.

### GetFolioArrangementCodeOk

`func (o *FolioArrangementCodesCopy) GetFolioArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetFolioArrangementCodeOk returns a tuple with the FolioArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioArrangementCode

`func (o *FolioArrangementCodesCopy) SetFolioArrangementCode(v []CopyConfigurationCodeType)`

SetFolioArrangementCode sets FolioArrangementCode field to given value.

### HasFolioArrangementCode

`func (o *FolioArrangementCodesCopy) HasFolioArrangementCode() bool`

HasFolioArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *FolioArrangementCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FolioArrangementCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FolioArrangementCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FolioArrangementCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FolioArrangementCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FolioArrangementCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FolioArrangementCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FolioArrangementCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



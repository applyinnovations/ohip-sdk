# ExportMappingLinkedCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkedCodes** | Pointer to [**[]ExportMappingLinkedCodeType**](ExportMappingLinkedCodeType.md) | The linked codes for the given hotel. | [optional] 
**MasterInfo** | Pointer to [**ExportMappingMasterInfoType**](ExportMappingMasterInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExportMappingLinkedCodes

`func NewExportMappingLinkedCodes() *ExportMappingLinkedCodes`

NewExportMappingLinkedCodes instantiates a new ExportMappingLinkedCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportMappingLinkedCodesWithDefaults

`func NewExportMappingLinkedCodesWithDefaults() *ExportMappingLinkedCodes`

NewExportMappingLinkedCodesWithDefaults instantiates a new ExportMappingLinkedCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkedCodes

`func (o *ExportMappingLinkedCodes) GetLinkedCodes() []ExportMappingLinkedCodeType`

GetLinkedCodes returns the LinkedCodes field if non-nil, zero value otherwise.

### GetLinkedCodesOk

`func (o *ExportMappingLinkedCodes) GetLinkedCodesOk() (*[]ExportMappingLinkedCodeType, bool)`

GetLinkedCodesOk returns a tuple with the LinkedCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedCodes

`func (o *ExportMappingLinkedCodes) SetLinkedCodes(v []ExportMappingLinkedCodeType)`

SetLinkedCodes sets LinkedCodes field to given value.

### HasLinkedCodes

`func (o *ExportMappingLinkedCodes) HasLinkedCodes() bool`

HasLinkedCodes returns a boolean if a field has been set.

### GetMasterInfo

`func (o *ExportMappingLinkedCodes) GetMasterInfo() ExportMappingMasterInfoType`

GetMasterInfo returns the MasterInfo field if non-nil, zero value otherwise.

### GetMasterInfoOk

`func (o *ExportMappingLinkedCodes) GetMasterInfoOk() (*ExportMappingMasterInfoType, bool)`

GetMasterInfoOk returns a tuple with the MasterInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfo

`func (o *ExportMappingLinkedCodes) SetMasterInfo(v ExportMappingMasterInfoType)`

SetMasterInfo sets MasterInfo field to given value.

### HasMasterInfo

`func (o *ExportMappingLinkedCodes) HasMasterInfo() bool`

HasMasterInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ExportMappingLinkedCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportMappingLinkedCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportMappingLinkedCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportMappingLinkedCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportMappingLinkedCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportMappingLinkedCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportMappingLinkedCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportMappingLinkedCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



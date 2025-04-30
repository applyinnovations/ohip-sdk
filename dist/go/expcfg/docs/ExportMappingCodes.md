# ExportMappingCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ExportMappingCodes** | Pointer to [**[]ExportMappingCodeType**](ExportMappingCodeType.md) | The details of the export mapping code being created. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExportMappingCodes

`func NewExportMappingCodes() *ExportMappingCodes`

NewExportMappingCodes instantiates a new ExportMappingCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExportMappingCodesWithDefaults

`func NewExportMappingCodesWithDefaults() *ExportMappingCodes`

NewExportMappingCodesWithDefaults instantiates a new ExportMappingCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ExportMappingCodes) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ExportMappingCodes) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ExportMappingCodes) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ExportMappingCodes) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetExportMappingCodes

`func (o *ExportMappingCodes) GetExportMappingCodes() []ExportMappingCodeType`

GetExportMappingCodes returns the ExportMappingCodes field if non-nil, zero value otherwise.

### GetExportMappingCodesOk

`func (o *ExportMappingCodes) GetExportMappingCodesOk() (*[]ExportMappingCodeType, bool)`

GetExportMappingCodesOk returns a tuple with the ExportMappingCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExportMappingCodes

`func (o *ExportMappingCodes) SetExportMappingCodes(v []ExportMappingCodeType)`

SetExportMappingCodes sets ExportMappingCodes field to given value.

### HasExportMappingCodes

`func (o *ExportMappingCodes) HasExportMappingCodes() bool`

HasExportMappingCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ExportMappingCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExportMappingCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExportMappingCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExportMappingCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExportMappingCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExportMappingCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExportMappingCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExportMappingCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



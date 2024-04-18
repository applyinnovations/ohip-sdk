# ConvertedHotelCode

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalSystem** | Pointer to **string** | ExternalSystem for which the conversion is needed. | [optional] 
**HotelInfo** | Pointer to [**ConversionHotelInfoType**](ConversionHotelInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewConvertedHotelCode

`func NewConvertedHotelCode() *ConvertedHotelCode`

NewConvertedHotelCode instantiates a new ConvertedHotelCode object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConvertedHotelCodeWithDefaults

`func NewConvertedHotelCodeWithDefaults() *ConvertedHotelCode`

NewConvertedHotelCodeWithDefaults instantiates a new ConvertedHotelCode object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalSystem

`func (o *ConvertedHotelCode) GetExternalSystem() string`

GetExternalSystem returns the ExternalSystem field if non-nil, zero value otherwise.

### GetExternalSystemOk

`func (o *ConvertedHotelCode) GetExternalSystemOk() (*string, bool)`

GetExternalSystemOk returns a tuple with the ExternalSystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalSystem

`func (o *ConvertedHotelCode) SetExternalSystem(v string)`

SetExternalSystem sets ExternalSystem field to given value.

### HasExternalSystem

`func (o *ConvertedHotelCode) HasExternalSystem() bool`

HasExternalSystem returns a boolean if a field has been set.

### GetHotelInfo

`func (o *ConvertedHotelCode) GetHotelInfo() ConversionHotelInfoType`

GetHotelInfo returns the HotelInfo field if non-nil, zero value otherwise.

### GetHotelInfoOk

`func (o *ConvertedHotelCode) GetHotelInfoOk() (*ConversionHotelInfoType, bool)`

GetHotelInfoOk returns a tuple with the HotelInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelInfo

`func (o *ConvertedHotelCode) SetHotelInfo(v ConversionHotelInfoType)`

SetHotelInfo sets HotelInfo field to given value.

### HasHotelInfo

`func (o *ConvertedHotelCode) HasHotelInfo() bool`

HasHotelInfo returns a boolean if a field has been set.

### GetLinks

`func (o *ConvertedHotelCode) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ConvertedHotelCode) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ConvertedHotelCode) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ConvertedHotelCode) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ConvertedHotelCode) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ConvertedHotelCode) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ConvertedHotelCode) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ConvertedHotelCode) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


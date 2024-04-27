# HotelDayTypeCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelDayTypeCodes** | Pointer to [**[]HotelDayTypeCodeType**](HotelDayTypeCodeType.md) | Details for day type code at hotel level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelDayTypeCodesDetails

`func NewHotelDayTypeCodesDetails() *HotelDayTypeCodesDetails`

NewHotelDayTypeCodesDetails instantiates a new HotelDayTypeCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelDayTypeCodesDetailsWithDefaults

`func NewHotelDayTypeCodesDetailsWithDefaults() *HotelDayTypeCodesDetails`

NewHotelDayTypeCodesDetailsWithDefaults instantiates a new HotelDayTypeCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelDayTypeCodes

`func (o *HotelDayTypeCodesDetails) GetHotelDayTypeCodes() []HotelDayTypeCodeType`

GetHotelDayTypeCodes returns the HotelDayTypeCodes field if non-nil, zero value otherwise.

### GetHotelDayTypeCodesOk

`func (o *HotelDayTypeCodesDetails) GetHotelDayTypeCodesOk() (*[]HotelDayTypeCodeType, bool)`

GetHotelDayTypeCodesOk returns a tuple with the HotelDayTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelDayTypeCodes

`func (o *HotelDayTypeCodesDetails) SetHotelDayTypeCodes(v []HotelDayTypeCodeType)`

SetHotelDayTypeCodes sets HotelDayTypeCodes field to given value.

### HasHotelDayTypeCodes

`func (o *HotelDayTypeCodesDetails) HasHotelDayTypeCodes() bool`

HasHotelDayTypeCodes returns a boolean if a field has been set.

### GetLinks

`func (o *HotelDayTypeCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelDayTypeCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelDayTypeCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelDayTypeCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelDayTypeCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelDayTypeCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelDayTypeCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelDayTypeCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HotelDayTypeCodesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelDayTypeCodes** | Pointer to [**[]HotelDayTypeCodeType**](HotelDayTypeCodeType.md) | Details for day type code at hotel level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelDayTypeCodesCriteria

`func NewHotelDayTypeCodesCriteria() *HotelDayTypeCodesCriteria`

NewHotelDayTypeCodesCriteria instantiates a new HotelDayTypeCodesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelDayTypeCodesCriteriaWithDefaults

`func NewHotelDayTypeCodesCriteriaWithDefaults() *HotelDayTypeCodesCriteria`

NewHotelDayTypeCodesCriteriaWithDefaults instantiates a new HotelDayTypeCodesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelDayTypeCodes

`func (o *HotelDayTypeCodesCriteria) GetHotelDayTypeCodes() []HotelDayTypeCodeType`

GetHotelDayTypeCodes returns the HotelDayTypeCodes field if non-nil, zero value otherwise.

### GetHotelDayTypeCodesOk

`func (o *HotelDayTypeCodesCriteria) GetHotelDayTypeCodesOk() (*[]HotelDayTypeCodeType, bool)`

GetHotelDayTypeCodesOk returns a tuple with the HotelDayTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelDayTypeCodes

`func (o *HotelDayTypeCodesCriteria) SetHotelDayTypeCodes(v []HotelDayTypeCodeType)`

SetHotelDayTypeCodes sets HotelDayTypeCodes field to given value.

### HasHotelDayTypeCodes

`func (o *HotelDayTypeCodesCriteria) HasHotelDayTypeCodes() bool`

HasHotelDayTypeCodes returns a boolean if a field has been set.

### GetLinks

`func (o *HotelDayTypeCodesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelDayTypeCodesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelDayTypeCodesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelDayTypeCodesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelDayTypeCodesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelDayTypeCodesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelDayTypeCodesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelDayTypeCodesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



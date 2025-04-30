# BookingTypesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingTypes** | Pointer to [**[]BookingTypeType**](BookingTypeType.md) | List of Booking Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBookingTypesCriteria

`func NewBookingTypesCriteria() *BookingTypesCriteria`

NewBookingTypesCriteria instantiates a new BookingTypesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookingTypesCriteriaWithDefaults

`func NewBookingTypesCriteriaWithDefaults() *BookingTypesCriteria`

NewBookingTypesCriteriaWithDefaults instantiates a new BookingTypesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingTypes

`func (o *BookingTypesCriteria) GetBookingTypes() []BookingTypeType`

GetBookingTypes returns the BookingTypes field if non-nil, zero value otherwise.

### GetBookingTypesOk

`func (o *BookingTypesCriteria) GetBookingTypesOk() (*[]BookingTypeType, bool)`

GetBookingTypesOk returns a tuple with the BookingTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingTypes

`func (o *BookingTypesCriteria) SetBookingTypes(v []BookingTypeType)`

SetBookingTypes sets BookingTypes field to given value.

### HasBookingTypes

`func (o *BookingTypesCriteria) HasBookingTypes() bool`

HasBookingTypes returns a boolean if a field has been set.

### GetLinks

`func (o *BookingTypesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BookingTypesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BookingTypesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BookingTypesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BookingTypesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BookingTypesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BookingTypesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BookingTypesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



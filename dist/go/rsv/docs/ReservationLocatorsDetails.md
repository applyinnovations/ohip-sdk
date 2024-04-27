# ReservationLocatorsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationLocators** | Pointer to [**[]ReservationLocatorType**](ReservationLocatorType.md) | Holds the Locator Information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationLocatorsDetails

`func NewReservationLocatorsDetails() *ReservationLocatorsDetails`

NewReservationLocatorsDetails instantiates a new ReservationLocatorsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationLocatorsDetailsWithDefaults

`func NewReservationLocatorsDetailsWithDefaults() *ReservationLocatorsDetails`

NewReservationLocatorsDetailsWithDefaults instantiates a new ReservationLocatorsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationLocatorsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationLocatorsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationLocatorsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationLocatorsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationLocators

`func (o *ReservationLocatorsDetails) GetReservationLocators() []ReservationLocatorType`

GetReservationLocators returns the ReservationLocators field if non-nil, zero value otherwise.

### GetReservationLocatorsOk

`func (o *ReservationLocatorsDetails) GetReservationLocatorsOk() (*[]ReservationLocatorType, bool)`

GetReservationLocatorsOk returns a tuple with the ReservationLocators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationLocators

`func (o *ReservationLocatorsDetails) SetReservationLocators(v []ReservationLocatorType)`

SetReservationLocators sets ReservationLocators field to given value.

### HasReservationLocators

`func (o *ReservationLocatorsDetails) HasReservationLocators() bool`

HasReservationLocators returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationLocatorsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationLocatorsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationLocatorsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationLocatorsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



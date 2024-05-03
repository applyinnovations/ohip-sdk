# CheckReservationsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckReservations** | Pointer to [**[]CheckReservationType**](CheckReservationType.md) | Collection of reservations and the status of its allowed actions, attached records, and indicators. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCheckReservationsDetails

`func NewCheckReservationsDetails() *CheckReservationsDetails`

NewCheckReservationsDetails instantiates a new CheckReservationsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckReservationsDetailsWithDefaults

`func NewCheckReservationsDetailsWithDefaults() *CheckReservationsDetails`

NewCheckReservationsDetailsWithDefaults instantiates a new CheckReservationsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckReservations

`func (o *CheckReservationsDetails) GetCheckReservations() []CheckReservationType`

GetCheckReservations returns the CheckReservations field if non-nil, zero value otherwise.

### GetCheckReservationsOk

`func (o *CheckReservationsDetails) GetCheckReservationsOk() (*[]CheckReservationType, bool)`

GetCheckReservationsOk returns a tuple with the CheckReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckReservations

`func (o *CheckReservationsDetails) SetCheckReservations(v []CheckReservationType)`

SetCheckReservations sets CheckReservations field to given value.

### HasCheckReservations

`func (o *CheckReservationsDetails) HasCheckReservations() bool`

HasCheckReservations returns a boolean if a field has been set.

### GetLinks

`func (o *CheckReservationsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CheckReservationsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CheckReservationsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CheckReservationsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CheckReservationsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CheckReservationsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CheckReservationsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CheckReservationsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



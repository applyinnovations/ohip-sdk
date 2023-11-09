# ChangeSharingGuests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservations** | Pointer to [**[]SharingGuestType**](SharingGuestType.md) | A collection of Sharing Reservations with the Guest Counts(adults or children) information that needs to be changed. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeSharingGuests

`func NewChangeSharingGuests() *ChangeSharingGuests`

NewChangeSharingGuests instantiates a new ChangeSharingGuests object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeSharingGuestsWithDefaults

`func NewChangeSharingGuestsWithDefaults() *ChangeSharingGuests`

NewChangeSharingGuestsWithDefaults instantiates a new ChangeSharingGuests object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeSharingGuests) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeSharingGuests) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeSharingGuests) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeSharingGuests) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *ChangeSharingGuests) GetReservations() []SharingGuestType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ChangeSharingGuests) GetReservationsOk() (*[]SharingGuestType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ChangeSharingGuests) SetReservations(v []SharingGuestType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ChangeSharingGuests) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeSharingGuests) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeSharingGuests) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeSharingGuests) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeSharingGuests) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



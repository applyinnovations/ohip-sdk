# PutSharingGuestsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservations** | Pointer to [**[]SharingGuestType**](SharingGuestType.md) | A collection of Sharing Reservations with the Guest Counts(adults or children) information that needs to be changed. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutSharingGuestsRequest

`func NewPutSharingGuestsRequest() *PutSharingGuestsRequest`

NewPutSharingGuestsRequest instantiates a new PutSharingGuestsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutSharingGuestsRequestWithDefaults

`func NewPutSharingGuestsRequestWithDefaults() *PutSharingGuestsRequest`

NewPutSharingGuestsRequestWithDefaults instantiates a new PutSharingGuestsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutSharingGuestsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutSharingGuestsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutSharingGuestsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutSharingGuestsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *PutSharingGuestsRequest) GetReservations() []SharingGuestType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PutSharingGuestsRequest) GetReservationsOk() (*[]SharingGuestType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PutSharingGuestsRequest) SetReservations(v []SharingGuestType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PutSharingGuestsRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *PutSharingGuestsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutSharingGuestsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutSharingGuestsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutSharingGuestsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



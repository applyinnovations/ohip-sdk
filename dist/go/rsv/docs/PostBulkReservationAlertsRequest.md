# PostBulkReservationAlertsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Reservations** | Pointer to [**[]ReservationAlertsType**](ReservationAlertsType.md) | Holds multiple alerts for a single reservation. Reservation will be identified by a unique identifier/ list of unique identifiers. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostBulkReservationAlertsRequest

`func NewPostBulkReservationAlertsRequest() *PostBulkReservationAlertsRequest`

NewPostBulkReservationAlertsRequest instantiates a new PostBulkReservationAlertsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostBulkReservationAlertsRequestWithDefaults

`func NewPostBulkReservationAlertsRequestWithDefaults() *PostBulkReservationAlertsRequest`

NewPostBulkReservationAlertsRequestWithDefaults instantiates a new PostBulkReservationAlertsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostBulkReservationAlertsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostBulkReservationAlertsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostBulkReservationAlertsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostBulkReservationAlertsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *PostBulkReservationAlertsRequest) GetReservations() []ReservationAlertsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *PostBulkReservationAlertsRequest) GetReservationsOk() (*[]ReservationAlertsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *PostBulkReservationAlertsRequest) SetReservations(v []ReservationAlertsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *PostBulkReservationAlertsRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *PostBulkReservationAlertsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostBulkReservationAlertsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostBulkReservationAlertsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostBulkReservationAlertsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



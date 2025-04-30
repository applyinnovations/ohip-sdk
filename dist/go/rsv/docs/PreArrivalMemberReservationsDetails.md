# PreArrivalMemberReservationsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreArrivalMemberReservationType** | Pointer to [**[]PreArrivalMemberReservationType**](PreArrivalMemberReservationType.md) | Collection of PreArrivalMemberReservations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPreArrivalMemberReservationsDetails

`func NewPreArrivalMemberReservationsDetails() *PreArrivalMemberReservationsDetails`

NewPreArrivalMemberReservationsDetails instantiates a new PreArrivalMemberReservationsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreArrivalMemberReservationsDetailsWithDefaults

`func NewPreArrivalMemberReservationsDetailsWithDefaults() *PreArrivalMemberReservationsDetails`

NewPreArrivalMemberReservationsDetailsWithDefaults instantiates a new PreArrivalMemberReservationsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreArrivalMemberReservationType

`func (o *PreArrivalMemberReservationsDetails) GetPreArrivalMemberReservationType() []PreArrivalMemberReservationType`

GetPreArrivalMemberReservationType returns the PreArrivalMemberReservationType field if non-nil, zero value otherwise.

### GetPreArrivalMemberReservationTypeOk

`func (o *PreArrivalMemberReservationsDetails) GetPreArrivalMemberReservationTypeOk() (*[]PreArrivalMemberReservationType, bool)`

GetPreArrivalMemberReservationTypeOk returns a tuple with the PreArrivalMemberReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreArrivalMemberReservationType

`func (o *PreArrivalMemberReservationsDetails) SetPreArrivalMemberReservationType(v []PreArrivalMemberReservationType)`

SetPreArrivalMemberReservationType sets PreArrivalMemberReservationType field to given value.

### HasPreArrivalMemberReservationType

`func (o *PreArrivalMemberReservationsDetails) HasPreArrivalMemberReservationType() bool`

HasPreArrivalMemberReservationType returns a boolean if a field has been set.

### GetLinks

`func (o *PreArrivalMemberReservationsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PreArrivalMemberReservationsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PreArrivalMemberReservationsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PreArrivalMemberReservationsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PreArrivalMemberReservationsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PreArrivalMemberReservationsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PreArrivalMemberReservationsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PreArrivalMemberReservationsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



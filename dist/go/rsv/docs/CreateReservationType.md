# CreateReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**ChannelInformation** | Pointer to [**ChannelResvRSInfoType**](ChannelResvRSInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateReservationType

`func NewCreateReservationType() *CreateReservationType`

NewCreateReservationType instantiates a new CreateReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateReservationTypeWithDefaults

`func NewCreateReservationTypeWithDefaults() *CreateReservationType`

NewCreateReservationTypeWithDefaults instantiates a new CreateReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *CreateReservationType) GetReservations() HotelReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CreateReservationType) GetReservationsOk() (*HotelReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CreateReservationType) SetReservations(v HotelReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CreateReservationType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetChannelInformation

`func (o *CreateReservationType) GetChannelInformation() ChannelResvRSInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *CreateReservationType) GetChannelInformationOk() (*ChannelResvRSInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *CreateReservationType) SetChannelInformation(v ChannelResvRSInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *CreateReservationType) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetLinks

`func (o *CreateReservationType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateReservationType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateReservationType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateReservationType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateReservationType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateReservationType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateReservationType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateReservationType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



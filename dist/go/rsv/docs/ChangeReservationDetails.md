# ChangeReservationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**ChannelInformation** | Pointer to [**ChannelResvRSInfoType**](ChannelResvRSInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeReservationDetails

`func NewChangeReservationDetails() *ChangeReservationDetails`

NewChangeReservationDetails instantiates a new ChangeReservationDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeReservationDetailsWithDefaults

`func NewChangeReservationDetailsWithDefaults() *ChangeReservationDetails`

NewChangeReservationDetailsWithDefaults instantiates a new ChangeReservationDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservations

`func (o *ChangeReservationDetails) GetReservations() HotelReservationsType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ChangeReservationDetails) GetReservationsOk() (*HotelReservationsType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ChangeReservationDetails) SetReservations(v HotelReservationsType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ChangeReservationDetails) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *ChangeReservationDetails) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *ChangeReservationDetails) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *ChangeReservationDetails) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *ChangeReservationDetails) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetChannelInformation

`func (o *ChangeReservationDetails) GetChannelInformation() ChannelResvRSInfoType`

GetChannelInformation returns the ChannelInformation field if non-nil, zero value otherwise.

### GetChannelInformationOk

`func (o *ChangeReservationDetails) GetChannelInformationOk() (*ChannelResvRSInfoType, bool)`

GetChannelInformationOk returns a tuple with the ChannelInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInformation

`func (o *ChangeReservationDetails) SetChannelInformation(v ChannelResvRSInfoType)`

SetChannelInformation sets ChannelInformation field to given value.

### HasChannelInformation

`func (o *ChangeReservationDetails) HasChannelInformation() bool`

HasChannelInformation returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeReservationDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeReservationDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeReservationDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeReservationDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeReservationDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeReservationDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeReservationDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeReservationDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



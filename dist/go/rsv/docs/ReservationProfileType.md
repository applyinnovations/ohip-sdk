# ReservationProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Profile** | Pointer to [**ProfileType**](ProfileType.md) |  | [optional] 
**ReservationProfileType** | Pointer to [**ResProfileTypeType**](ResProfileTypeType.md) |  | [optional] 

## Methods

### NewReservationProfileType

`func NewReservationProfileType() *ReservationProfileType`

NewReservationProfileType instantiates a new ReservationProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationProfileTypeWithDefaults

`func NewReservationProfileTypeWithDefaults() *ReservationProfileType`

NewReservationProfileTypeWithDefaults instantiates a new ReservationProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileIdList

`func (o *ReservationProfileType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ReservationProfileType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ReservationProfileType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ReservationProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetProfile

`func (o *ReservationProfileType) GetProfile() ProfileType`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *ReservationProfileType) GetProfileOk() (*ProfileType, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *ReservationProfileType) SetProfile(v ProfileType)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *ReservationProfileType) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### GetReservationProfileType

`func (o *ReservationProfileType) GetReservationProfileType() ResProfileTypeType`

GetReservationProfileType returns the ReservationProfileType field if non-nil, zero value otherwise.

### GetReservationProfileTypeOk

`func (o *ReservationProfileType) GetReservationProfileTypeOk() (*ResProfileTypeType, bool)`

GetReservationProfileTypeOk returns a tuple with the ReservationProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfileType

`func (o *ReservationProfileType) SetReservationProfileType(v ResProfileTypeType)`

SetReservationProfileType sets ReservationProfileType field to given value.

### HasReservationProfileType

`func (o *ReservationProfileType) HasReservationProfileType() bool`

HasReservationProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



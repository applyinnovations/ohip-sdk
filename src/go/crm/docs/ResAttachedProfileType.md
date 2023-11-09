# ResAttachedProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Attached profile name | [optional] 
**ProfileIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**ReservationProfileType** | Pointer to [**ResProfileTypeType**](ResProfileTypeType.md) |  | [optional] 

## Methods

### NewResAttachedProfileType

`func NewResAttachedProfileType() *ResAttachedProfileType`

NewResAttachedProfileType instantiates a new ResAttachedProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResAttachedProfileTypeWithDefaults

`func NewResAttachedProfileTypeWithDefaults() *ResAttachedProfileType`

NewResAttachedProfileTypeWithDefaults instantiates a new ResAttachedProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ResAttachedProfileType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ResAttachedProfileType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ResAttachedProfileType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ResAttachedProfileType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetProfileIdList

`func (o *ResAttachedProfileType) GetProfileIdList() ProfileIdList`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *ResAttachedProfileType) GetProfileIdListOk() (*ProfileIdList, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *ResAttachedProfileType) SetProfileIdList(v ProfileIdList)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *ResAttachedProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetReservationProfileType

`func (o *ResAttachedProfileType) GetReservationProfileType() ResProfileTypeType`

GetReservationProfileType returns the ReservationProfileType field if non-nil, zero value otherwise.

### GetReservationProfileTypeOk

`func (o *ResAttachedProfileType) GetReservationProfileTypeOk() (*ResProfileTypeType, bool)`

GetReservationProfileTypeOk returns a tuple with the ReservationProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfileType

`func (o *ResAttachedProfileType) SetReservationProfileType(v ResProfileTypeType)`

SetReservationProfileType sets ReservationProfileType field to given value.

### HasReservationProfileType

`func (o *ResAttachedProfileType) HasReservationProfileType() bool`

HasReservationProfileType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



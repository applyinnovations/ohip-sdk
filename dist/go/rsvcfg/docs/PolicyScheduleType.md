# PolicyScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ScheduleId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ScheduleDetail** | Pointer to [**PolicyScheduleDetailType**](PolicyScheduleDetailType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the Policy Schedules. | [optional] 
**PolicyType** | Pointer to [**PolicyTypeType**](PolicyTypeType.md) |  | [optional] 

## Methods

### NewPolicyScheduleType

`func NewPolicyScheduleType() *PolicyScheduleType`

NewPolicyScheduleType instantiates a new PolicyScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPolicyScheduleTypeWithDefaults

`func NewPolicyScheduleTypeWithDefaults() *PolicyScheduleType`

NewPolicyScheduleTypeWithDefaults instantiates a new PolicyScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetScheduleId

`func (o *PolicyScheduleType) GetScheduleId() UniqueIDType`

GetScheduleId returns the ScheduleId field if non-nil, zero value otherwise.

### GetScheduleIdOk

`func (o *PolicyScheduleType) GetScheduleIdOk() (*UniqueIDType, bool)`

GetScheduleIdOk returns a tuple with the ScheduleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleId

`func (o *PolicyScheduleType) SetScheduleId(v UniqueIDType)`

SetScheduleId sets ScheduleId field to given value.

### HasScheduleId

`func (o *PolicyScheduleType) HasScheduleId() bool`

HasScheduleId returns a boolean if a field has been set.

### GetScheduleDetail

`func (o *PolicyScheduleType) GetScheduleDetail() PolicyScheduleDetailType`

GetScheduleDetail returns the ScheduleDetail field if non-nil, zero value otherwise.

### GetScheduleDetailOk

`func (o *PolicyScheduleType) GetScheduleDetailOk() (*PolicyScheduleDetailType, bool)`

GetScheduleDetailOk returns a tuple with the ScheduleDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduleDetail

`func (o *PolicyScheduleType) SetScheduleDetail(v PolicyScheduleDetailType)`

SetScheduleDetail sets ScheduleDetail field to given value.

### HasScheduleDetail

`func (o *PolicyScheduleType) HasScheduleDetail() bool`

HasScheduleDetail returns a boolean if a field has been set.

### GetHotelId

`func (o *PolicyScheduleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *PolicyScheduleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *PolicyScheduleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *PolicyScheduleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPolicyType

`func (o *PolicyScheduleType) GetPolicyType() PolicyTypeType`

GetPolicyType returns the PolicyType field if non-nil, zero value otherwise.

### GetPolicyTypeOk

`func (o *PolicyScheduleType) GetPolicyTypeOk() (*PolicyTypeType, bool)`

GetPolicyTypeOk returns a tuple with the PolicyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyType

`func (o *PolicyScheduleType) SetPolicyType(v PolicyTypeType)`

SetPolicyType sets PolicyType field to given value.

### HasPolicyType

`func (o *PolicyScheduleType) HasPolicyType() bool`

HasPolicyType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



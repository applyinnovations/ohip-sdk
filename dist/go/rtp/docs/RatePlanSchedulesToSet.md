# RatePlanSchedulesToSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**RatePlanScheduleList** | Pointer to [**[]RatePlanScheduleDetailType**](RatePlanScheduleDetailType.md) | List of rate plan schedules to be created / updated. | [optional] 

## Methods

### NewRatePlanSchedulesToSet

`func NewRatePlanSchedulesToSet() *RatePlanSchedulesToSet`

NewRatePlanSchedulesToSet instantiates a new RatePlanSchedulesToSet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanSchedulesToSetWithDefaults

`func NewRatePlanSchedulesToSetWithDefaults() *RatePlanSchedulesToSet`

NewRatePlanSchedulesToSetWithDefaults instantiates a new RatePlanSchedulesToSet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *RatePlanSchedulesToSet) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RatePlanSchedulesToSet) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RatePlanSchedulesToSet) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RatePlanSchedulesToSet) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *RatePlanSchedulesToSet) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *RatePlanSchedulesToSet) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *RatePlanSchedulesToSet) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *RatePlanSchedulesToSet) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRatePlanScheduleList

`func (o *RatePlanSchedulesToSet) GetRatePlanScheduleList() []RatePlanScheduleDetailType`

GetRatePlanScheduleList returns the RatePlanScheduleList field if non-nil, zero value otherwise.

### GetRatePlanScheduleListOk

`func (o *RatePlanSchedulesToSet) GetRatePlanScheduleListOk() (*[]RatePlanScheduleDetailType, bool)`

GetRatePlanScheduleListOk returns a tuple with the RatePlanScheduleList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanScheduleList

`func (o *RatePlanSchedulesToSet) SetRatePlanScheduleList(v []RatePlanScheduleDetailType)`

SetRatePlanScheduleList sets RatePlanScheduleList field to given value.

### HasRatePlanScheduleList

`func (o *RatePlanSchedulesToSet) HasRatePlanScheduleList() bool`

HasRatePlanScheduleList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# MatchProfileType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code for the profile. | [optional] 
**ProfileIdList** | Pointer to [**ProfileIdList**](ProfileIdList.md) |  | [optional] 
**StatusCode** | Pointer to [**MatchStatusType**](MatchStatusType.md) |  | [optional] 

## Methods

### NewMatchProfileType

`func NewMatchProfileType() *MatchProfileType`

NewMatchProfileType instantiates a new MatchProfileType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMatchProfileTypeWithDefaults

`func NewMatchProfileTypeWithDefaults() *MatchProfileType`

NewMatchProfileTypeWithDefaults instantiates a new MatchProfileType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *MatchProfileType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MatchProfileType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MatchProfileType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MatchProfileType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetProfileIdList

`func (o *MatchProfileType) GetProfileIdList() ProfileIdList`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *MatchProfileType) GetProfileIdListOk() (*ProfileIdList, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *MatchProfileType) SetProfileIdList(v ProfileIdList)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *MatchProfileType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetStatusCode

`func (o *MatchProfileType) GetStatusCode() MatchStatusType`

GetStatusCode returns the StatusCode field if non-nil, zero value otherwise.

### GetStatusCodeOk

`func (o *MatchProfileType) GetStatusCodeOk() (*MatchStatusType, bool)`

GetStatusCodeOk returns a tuple with the StatusCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusCode

`func (o *MatchProfileType) SetStatusCode(v MatchStatusType)`

SetStatusCode sets StatusCode field to given value.

### HasStatusCode

`func (o *MatchProfileType) HasStatusCode() bool`

HasStatusCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



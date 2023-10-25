# SearchPropertyResponseType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**Limit** | Pointer to **int32** | Indicates maximum number of records a Web Service should return. | [optional] 
**Offset** | Pointer to **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [optional] 
**RoomStays** | Pointer to [**[]SearchPropertyRoomStayType**](SearchPropertyRoomStayType.md) | Collection of the returned Offers | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewSearchPropertyResponseType

`func NewSearchPropertyResponseType() *SearchPropertyResponseType`

NewSearchPropertyResponseType instantiates a new SearchPropertyResponseType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchPropertyResponseTypeWithDefaults

`func NewSearchPropertyResponseTypeWithDefaults() *SearchPropertyResponseType`

NewSearchPropertyResponseTypeWithDefaults instantiates a new SearchPropertyResponseType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHasMore

`func (o *SearchPropertyResponseType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *SearchPropertyResponseType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *SearchPropertyResponseType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *SearchPropertyResponseType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetLimit

`func (o *SearchPropertyResponseType) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *SearchPropertyResponseType) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *SearchPropertyResponseType) SetLimit(v int32)`

SetLimit sets Limit field to given value.

### HasLimit

`func (o *SearchPropertyResponseType) HasLimit() bool`

HasLimit returns a boolean if a field has been set.

### GetOffset

`func (o *SearchPropertyResponseType) GetOffset() int32`

GetOffset returns the Offset field if non-nil, zero value otherwise.

### GetOffsetOk

`func (o *SearchPropertyResponseType) GetOffsetOk() (*int32, bool)`

GetOffsetOk returns a tuple with the Offset field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOffset

`func (o *SearchPropertyResponseType) SetOffset(v int32)`

SetOffset sets Offset field to given value.

### HasOffset

`func (o *SearchPropertyResponseType) HasOffset() bool`

HasOffset returns a boolean if a field has been set.

### GetRoomStays

`func (o *SearchPropertyResponseType) GetRoomStays() []SearchPropertyRoomStayType`

GetRoomStays returns the RoomStays field if non-nil, zero value otherwise.

### GetRoomStaysOk

`func (o *SearchPropertyResponseType) GetRoomStaysOk() (*[]SearchPropertyRoomStayType, bool)`

GetRoomStaysOk returns a tuple with the RoomStays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStays

`func (o *SearchPropertyResponseType) SetRoomStays(v []SearchPropertyRoomStayType)`

SetRoomStays sets RoomStays field to given value.

### HasRoomStays

`func (o *SearchPropertyResponseType) HasRoomStays() bool`

HasRoomStays returns a boolean if a field has been set.

### GetTotalResults

`func (o *SearchPropertyResponseType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *SearchPropertyResponseType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *SearchPropertyResponseType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *SearchPropertyResponseType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



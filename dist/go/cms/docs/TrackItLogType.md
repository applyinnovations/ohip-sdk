# TrackItLogType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**TrackItLogId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TrackItId** | Pointer to [**TrackItId**](TrackItId.md) |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**BusinessDate** | Pointer to **string** |  | [optional] 
**LogUserId** | Pointer to **int32** |  | [optional] 
**LogUserName** | Pointer to **string** |  | [optional] 
**LogDate** | Pointer to **string** |  | [optional] 

## Methods

### NewTrackItLogType

`func NewTrackItLogType() *TrackItLogType`

NewTrackItLogType instantiates a new TrackItLogType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrackItLogTypeWithDefaults

`func NewTrackItLogTypeWithDefaults() *TrackItLogType`

NewTrackItLogTypeWithDefaults instantiates a new TrackItLogType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TrackItLogType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TrackItLogType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TrackItLogType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TrackItLogType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTrackItLogId

`func (o *TrackItLogType) GetTrackItLogId() UniqueIDType`

GetTrackItLogId returns the TrackItLogId field if non-nil, zero value otherwise.

### GetTrackItLogIdOk

`func (o *TrackItLogType) GetTrackItLogIdOk() (*UniqueIDType, bool)`

GetTrackItLogIdOk returns a tuple with the TrackItLogId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItLogId

`func (o *TrackItLogType) SetTrackItLogId(v UniqueIDType)`

SetTrackItLogId sets TrackItLogId field to given value.

### HasTrackItLogId

`func (o *TrackItLogType) HasTrackItLogId() bool`

HasTrackItLogId returns a boolean if a field has been set.

### GetTrackItId

`func (o *TrackItLogType) GetTrackItId() TrackItId`

GetTrackItId returns the TrackItId field if non-nil, zero value otherwise.

### GetTrackItIdOk

`func (o *TrackItLogType) GetTrackItIdOk() (*TrackItId, bool)`

GetTrackItIdOk returns a tuple with the TrackItId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackItId

`func (o *TrackItLogType) SetTrackItId(v TrackItId)`

SetTrackItId sets TrackItId field to given value.

### HasTrackItId

`func (o *TrackItLogType) HasTrackItId() bool`

HasTrackItId returns a boolean if a field has been set.

### GetType

`func (o *TrackItLogType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TrackItLogType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TrackItLogType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TrackItLogType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDescription

`func (o *TrackItLogType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TrackItLogType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TrackItLogType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TrackItLogType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetBusinessDate

`func (o *TrackItLogType) GetBusinessDate() string`

GetBusinessDate returns the BusinessDate field if non-nil, zero value otherwise.

### GetBusinessDateOk

`func (o *TrackItLogType) GetBusinessDateOk() (*string, bool)`

GetBusinessDateOk returns a tuple with the BusinessDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessDate

`func (o *TrackItLogType) SetBusinessDate(v string)`

SetBusinessDate sets BusinessDate field to given value.

### HasBusinessDate

`func (o *TrackItLogType) HasBusinessDate() bool`

HasBusinessDate returns a boolean if a field has been set.

### GetLogUserId

`func (o *TrackItLogType) GetLogUserId() int32`

GetLogUserId returns the LogUserId field if non-nil, zero value otherwise.

### GetLogUserIdOk

`func (o *TrackItLogType) GetLogUserIdOk() (*int32, bool)`

GetLogUserIdOk returns a tuple with the LogUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserId

`func (o *TrackItLogType) SetLogUserId(v int32)`

SetLogUserId sets LogUserId field to given value.

### HasLogUserId

`func (o *TrackItLogType) HasLogUserId() bool`

HasLogUserId returns a boolean if a field has been set.

### GetLogUserName

`func (o *TrackItLogType) GetLogUserName() string`

GetLogUserName returns the LogUserName field if non-nil, zero value otherwise.

### GetLogUserNameOk

`func (o *TrackItLogType) GetLogUserNameOk() (*string, bool)`

GetLogUserNameOk returns a tuple with the LogUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserName

`func (o *TrackItLogType) SetLogUserName(v string)`

SetLogUserName sets LogUserName field to given value.

### HasLogUserName

`func (o *TrackItLogType) HasLogUserName() bool`

HasLogUserName returns a boolean if a field has been set.

### GetLogDate

`func (o *TrackItLogType) GetLogDate() string`

GetLogDate returns the LogDate field if non-nil, zero value otherwise.

### GetLogDateOk

`func (o *TrackItLogType) GetLogDateOk() (*string, bool)`

GetLogDateOk returns a tuple with the LogDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogDate

`func (o *TrackItLogType) SetLogDate(v string)`

SetLogDate sets LogDate field to given value.

### HasLogDate

`func (o *TrackItLogType) HasLogDate() bool`

HasLogDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



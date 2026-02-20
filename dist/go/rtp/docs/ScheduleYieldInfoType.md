# ScheduleYieldInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**YieldInfo** | Pointer to [**[]YieldInfoType**](YieldInfoType.md) | The detail info for the adjustment code. | [optional] 
**HotelId** | Pointer to **string** | the hotel code for the yield adjustments. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewScheduleYieldInfoType

`func NewScheduleYieldInfoType() *ScheduleYieldInfoType`

NewScheduleYieldInfoType instantiates a new ScheduleYieldInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleYieldInfoTypeWithDefaults

`func NewScheduleYieldInfoTypeWithDefaults() *ScheduleYieldInfoType`

NewScheduleYieldInfoTypeWithDefaults instantiates a new ScheduleYieldInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetYieldInfo

`func (o *ScheduleYieldInfoType) GetYieldInfo() []YieldInfoType`

GetYieldInfo returns the YieldInfo field if non-nil, zero value otherwise.

### GetYieldInfoOk

`func (o *ScheduleYieldInfoType) GetYieldInfoOk() (*[]YieldInfoType, bool)`

GetYieldInfoOk returns a tuple with the YieldInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldInfo

`func (o *ScheduleYieldInfoType) SetYieldInfo(v []YieldInfoType)`

SetYieldInfo sets YieldInfo field to given value.

### HasYieldInfo

`func (o *ScheduleYieldInfoType) HasYieldInfo() bool`

HasYieldInfo returns a boolean if a field has been set.

### GetHotelId

`func (o *ScheduleYieldInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ScheduleYieldInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ScheduleYieldInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ScheduleYieldInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetUrl

`func (o *ScheduleYieldInfoType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ScheduleYieldInfoType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ScheduleYieldInfoType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ScheduleYieldInfoType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *ScheduleYieldInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ScheduleYieldInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ScheduleYieldInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ScheduleYieldInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *ScheduleYieldInfoType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ScheduleYieldInfoType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ScheduleYieldInfoType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ScheduleYieldInfoType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *ScheduleYieldInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ScheduleYieldInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ScheduleYieldInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ScheduleYieldInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *ScheduleYieldInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ScheduleYieldInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ScheduleYieldInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ScheduleYieldInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *ScheduleYieldInfoType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ScheduleYieldInfoType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ScheduleYieldInfoType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ScheduleYieldInfoType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# HotelReservationTraceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeInfo** | Pointer to [**TraceTimeInfoType**](TraceTimeInfoType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**DepartmentId** | Pointer to **string** | Indicates the Department code. | [optional] 
**TraceText** | Pointer to **string** | The information this trace contains. | [optional] 
**ResolveInfo** | Pointer to [**TraceResolveType**](TraceResolveType.md) |  | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 

## Methods

### NewHotelReservationTraceType

`func NewHotelReservationTraceType() *HotelReservationTraceType`

NewHotelReservationTraceType instantiates a new HotelReservationTraceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelReservationTraceTypeWithDefaults

`func NewHotelReservationTraceTypeWithDefaults() *HotelReservationTraceType`

NewHotelReservationTraceTypeWithDefaults instantiates a new HotelReservationTraceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeInfo

`func (o *HotelReservationTraceType) GetTimeInfo() TraceTimeInfoType`

GetTimeInfo returns the TimeInfo field if non-nil, zero value otherwise.

### GetTimeInfoOk

`func (o *HotelReservationTraceType) GetTimeInfoOk() (*TraceTimeInfoType, bool)`

GetTimeInfoOk returns a tuple with the TimeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInfo

`func (o *HotelReservationTraceType) SetTimeInfo(v TraceTimeInfoType)`

SetTimeInfo sets TimeInfo field to given value.

### HasTimeInfo

`func (o *HotelReservationTraceType) HasTimeInfo() bool`

HasTimeInfo returns a boolean if a field has been set.

### GetReservationId

`func (o *HotelReservationTraceType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *HotelReservationTraceType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *HotelReservationTraceType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *HotelReservationTraceType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetDepartmentId

`func (o *HotelReservationTraceType) GetDepartmentId() string`

GetDepartmentId returns the DepartmentId field if non-nil, zero value otherwise.

### GetDepartmentIdOk

`func (o *HotelReservationTraceType) GetDepartmentIdOk() (*string, bool)`

GetDepartmentIdOk returns a tuple with the DepartmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentId

`func (o *HotelReservationTraceType) SetDepartmentId(v string)`

SetDepartmentId sets DepartmentId field to given value.

### HasDepartmentId

`func (o *HotelReservationTraceType) HasDepartmentId() bool`

HasDepartmentId returns a boolean if a field has been set.

### GetTraceText

`func (o *HotelReservationTraceType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *HotelReservationTraceType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *HotelReservationTraceType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *HotelReservationTraceType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetResolveInfo

`func (o *HotelReservationTraceType) GetResolveInfo() TraceResolveType`

GetResolveInfo returns the ResolveInfo field if non-nil, zero value otherwise.

### GetResolveInfoOk

`func (o *HotelReservationTraceType) GetResolveInfoOk() (*TraceResolveType, bool)`

GetResolveInfoOk returns a tuple with the ResolveInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveInfo

`func (o *HotelReservationTraceType) SetResolveInfo(v TraceResolveType)`

SetResolveInfo sets ResolveInfo field to given value.

### HasResolveInfo

`func (o *HotelReservationTraceType) HasResolveInfo() bool`

HasResolveInfo returns a boolean if a field has been set.

### GetUrl

`func (o *HotelReservationTraceType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *HotelReservationTraceType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *HotelReservationTraceType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *HotelReservationTraceType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *HotelReservationTraceType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HotelReservationTraceType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HotelReservationTraceType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *HotelReservationTraceType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *HotelReservationTraceType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *HotelReservationTraceType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *HotelReservationTraceType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *HotelReservationTraceType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *HotelReservationTraceType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *HotelReservationTraceType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *HotelReservationTraceType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *HotelReservationTraceType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *HotelReservationTraceType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *HotelReservationTraceType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *HotelReservationTraceType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *HotelReservationTraceType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *HotelReservationTraceType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *HotelReservationTraceType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *HotelReservationTraceType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *HotelReservationTraceType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *HotelReservationTraceType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *HotelReservationTraceType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *HotelReservationTraceType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *HotelReservationTraceType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *HotelReservationTraceType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *HotelReservationTraceType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *HotelReservationTraceType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *HotelReservationTraceType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *HotelReservationTraceType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *HotelReservationTraceType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *HotelReservationTraceType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *HotelReservationTraceType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *HotelReservationTraceType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *HotelReservationTraceType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *HotelReservationTraceType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *HotelReservationTraceType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *HotelReservationTraceType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *HotelReservationTraceType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *HotelReservationTraceType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *HotelReservationTraceType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



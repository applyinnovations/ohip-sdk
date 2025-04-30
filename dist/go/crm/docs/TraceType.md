# TraceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeInfo** | Pointer to [**TraceTimeInfoType**](TraceTimeInfoType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**DepartmentId** | Pointer to **string** | Indicates the Department code. | [optional] 
**TraceText** | Pointer to **string** | The information this trace contains. | [optional] 
**ResolveInfo** | Pointer to [**TraceResolveType**](TraceResolveType.md) |  | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewTraceType

`func NewTraceType() *TraceType`

NewTraceType instantiates a new TraceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTraceTypeWithDefaults

`func NewTraceTypeWithDefaults() *TraceType`

NewTraceTypeWithDefaults instantiates a new TraceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeInfo

`func (o *TraceType) GetTimeInfo() TraceTimeInfoType`

GetTimeInfo returns the TimeInfo field if non-nil, zero value otherwise.

### GetTimeInfoOk

`func (o *TraceType) GetTimeInfoOk() (*TraceTimeInfoType, bool)`

GetTimeInfoOk returns a tuple with the TimeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInfo

`func (o *TraceType) SetTimeInfo(v TraceTimeInfoType)`

SetTimeInfo sets TimeInfo field to given value.

### HasTimeInfo

`func (o *TraceType) HasTimeInfo() bool`

HasTimeInfo returns a boolean if a field has been set.

### GetReservationId

`func (o *TraceType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *TraceType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *TraceType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *TraceType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetDepartmentId

`func (o *TraceType) GetDepartmentId() string`

GetDepartmentId returns the DepartmentId field if non-nil, zero value otherwise.

### GetDepartmentIdOk

`func (o *TraceType) GetDepartmentIdOk() (*string, bool)`

GetDepartmentIdOk returns a tuple with the DepartmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentId

`func (o *TraceType) SetDepartmentId(v string)`

SetDepartmentId sets DepartmentId field to given value.

### HasDepartmentId

`func (o *TraceType) HasDepartmentId() bool`

HasDepartmentId returns a boolean if a field has been set.

### GetTraceText

`func (o *TraceType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *TraceType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *TraceType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *TraceType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetResolveInfo

`func (o *TraceType) GetResolveInfo() TraceResolveType`

GetResolveInfo returns the ResolveInfo field if non-nil, zero value otherwise.

### GetResolveInfoOk

`func (o *TraceType) GetResolveInfoOk() (*TraceResolveType, bool)`

GetResolveInfoOk returns a tuple with the ResolveInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveInfo

`func (o *TraceType) SetResolveInfo(v TraceResolveType)`

SetResolveInfo sets ResolveInfo field to given value.

### HasResolveInfo

`func (o *TraceType) HasResolveInfo() bool`

HasResolveInfo returns a boolean if a field has been set.

### GetUrl

`func (o *TraceType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *TraceType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *TraceType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *TraceType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *TraceType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TraceType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TraceType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TraceType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *TraceType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *TraceType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *TraceType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *TraceType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *TraceType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *TraceType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *TraceType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *TraceType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *TraceType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TraceType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TraceType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *TraceType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *TraceType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *TraceType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *TraceType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *TraceType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *TraceType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *TraceType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *TraceType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *TraceType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *TraceType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *TraceType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *TraceType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *TraceType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *TraceType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *TraceType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *TraceType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *TraceType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *TraceType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *TraceType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *TraceType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *TraceType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



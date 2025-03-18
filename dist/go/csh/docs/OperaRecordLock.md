# OperaRecordLock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LockHandle** | Pointer to **float32** | This is the identifier of the lock. This will be null when the requesting user does not own the lock. | [optional] 
**RecordType** | Pointer to [**OperaLockRecordType**](OperaLockRecordType.md) |  | [optional] 
**RecordId** | Pointer to **string** | This is the id of the locked record. | [optional] 
**CreatedBy** | Pointer to **string** | This is the user name of the current owner of the locked record. | [optional] 
**CreatedOn** | Pointer to **string** | This is the time when the record was locked. | [optional] 
**TimeToLive** | Pointer to **float32** | This is the validity of the lock in seconds. | [optional] 
**ExpiresOn** | Pointer to **string** | This is the estimated expiry time of the lock. | [optional] 
**Internal** | Pointer to **bool** | Notification flag to specify if the lock is based on an Internal Opera9 lock versus an External lock. | [optional] 

## Methods

### NewOperaRecordLock

`func NewOperaRecordLock() *OperaRecordLock`

NewOperaRecordLock instantiates a new OperaRecordLock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOperaRecordLockWithDefaults

`func NewOperaRecordLockWithDefaults() *OperaRecordLock`

NewOperaRecordLockWithDefaults instantiates a new OperaRecordLock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLockHandle

`func (o *OperaRecordLock) GetLockHandle() float32`

GetLockHandle returns the LockHandle field if non-nil, zero value otherwise.

### GetLockHandleOk

`func (o *OperaRecordLock) GetLockHandleOk() (*float32, bool)`

GetLockHandleOk returns a tuple with the LockHandle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockHandle

`func (o *OperaRecordLock) SetLockHandle(v float32)`

SetLockHandle sets LockHandle field to given value.

### HasLockHandle

`func (o *OperaRecordLock) HasLockHandle() bool`

HasLockHandle returns a boolean if a field has been set.

### GetRecordType

`func (o *OperaRecordLock) GetRecordType() OperaLockRecordType`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *OperaRecordLock) GetRecordTypeOk() (*OperaLockRecordType, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *OperaRecordLock) SetRecordType(v OperaLockRecordType)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *OperaRecordLock) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetRecordId

`func (o *OperaRecordLock) GetRecordId() string`

GetRecordId returns the RecordId field if non-nil, zero value otherwise.

### GetRecordIdOk

`func (o *OperaRecordLock) GetRecordIdOk() (*string, bool)`

GetRecordIdOk returns a tuple with the RecordId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordId

`func (o *OperaRecordLock) SetRecordId(v string)`

SetRecordId sets RecordId field to given value.

### HasRecordId

`func (o *OperaRecordLock) HasRecordId() bool`

HasRecordId returns a boolean if a field has been set.

### GetCreatedBy

`func (o *OperaRecordLock) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *OperaRecordLock) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *OperaRecordLock) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *OperaRecordLock) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### GetCreatedOn

`func (o *OperaRecordLock) GetCreatedOn() string`

GetCreatedOn returns the CreatedOn field if non-nil, zero value otherwise.

### GetCreatedOnOk

`func (o *OperaRecordLock) GetCreatedOnOk() (*string, bool)`

GetCreatedOnOk returns a tuple with the CreatedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedOn

`func (o *OperaRecordLock) SetCreatedOn(v string)`

SetCreatedOn sets CreatedOn field to given value.

### HasCreatedOn

`func (o *OperaRecordLock) HasCreatedOn() bool`

HasCreatedOn returns a boolean if a field has been set.

### GetTimeToLive

`func (o *OperaRecordLock) GetTimeToLive() float32`

GetTimeToLive returns the TimeToLive field if non-nil, zero value otherwise.

### GetTimeToLiveOk

`func (o *OperaRecordLock) GetTimeToLiveOk() (*float32, bool)`

GetTimeToLiveOk returns a tuple with the TimeToLive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeToLive

`func (o *OperaRecordLock) SetTimeToLive(v float32)`

SetTimeToLive sets TimeToLive field to given value.

### HasTimeToLive

`func (o *OperaRecordLock) HasTimeToLive() bool`

HasTimeToLive returns a boolean if a field has been set.

### GetExpiresOn

`func (o *OperaRecordLock) GetExpiresOn() string`

GetExpiresOn returns the ExpiresOn field if non-nil, zero value otherwise.

### GetExpiresOnOk

`func (o *OperaRecordLock) GetExpiresOnOk() (*string, bool)`

GetExpiresOnOk returns a tuple with the ExpiresOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresOn

`func (o *OperaRecordLock) SetExpiresOn(v string)`

SetExpiresOn sets ExpiresOn field to given value.

### HasExpiresOn

`func (o *OperaRecordLock) HasExpiresOn() bool`

HasExpiresOn returns a boolean if a field has been set.

### GetInternal

`func (o *OperaRecordLock) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *OperaRecordLock) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *OperaRecordLock) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *OperaRecordLock) HasInternal() bool`

HasInternal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AttachDetachType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachDateTime** | Pointer to **string** | Time stamp the accompanying guest was last attached. | [optional] 
**DetachDateTime** | Pointer to **string** | Time stamp the accompanying guest was last detached. | [optional] 
**Detached** | Pointer to **bool** | This attribute indicates if the accompanying guest is marked as detached or attached. | [optional] 

## Methods

### NewAttachDetachType

`func NewAttachDetachType() *AttachDetachType`

NewAttachDetachType instantiates a new AttachDetachType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttachDetachTypeWithDefaults

`func NewAttachDetachTypeWithDefaults() *AttachDetachType`

NewAttachDetachTypeWithDefaults instantiates a new AttachDetachType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttachDateTime

`func (o *AttachDetachType) GetAttachDateTime() string`

GetAttachDateTime returns the AttachDateTime field if non-nil, zero value otherwise.

### GetAttachDateTimeOk

`func (o *AttachDetachType) GetAttachDateTimeOk() (*string, bool)`

GetAttachDateTimeOk returns a tuple with the AttachDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachDateTime

`func (o *AttachDetachType) SetAttachDateTime(v string)`

SetAttachDateTime sets AttachDateTime field to given value.

### HasAttachDateTime

`func (o *AttachDetachType) HasAttachDateTime() bool`

HasAttachDateTime returns a boolean if a field has been set.

### GetDetachDateTime

`func (o *AttachDetachType) GetDetachDateTime() string`

GetDetachDateTime returns the DetachDateTime field if non-nil, zero value otherwise.

### GetDetachDateTimeOk

`func (o *AttachDetachType) GetDetachDateTimeOk() (*string, bool)`

GetDetachDateTimeOk returns a tuple with the DetachDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetachDateTime

`func (o *AttachDetachType) SetDetachDateTime(v string)`

SetDetachDateTime sets DetachDateTime field to given value.

### HasDetachDateTime

`func (o *AttachDetachType) HasDetachDateTime() bool`

HasDetachDateTime returns a boolean if a field has been set.

### GetDetached

`func (o *AttachDetachType) GetDetached() bool`

GetDetached returns the Detached field if non-nil, zero value otherwise.

### GetDetachedOk

`func (o *AttachDetachType) GetDetachedOk() (*bool, bool)`

GetDetachedOk returns a tuple with the Detached field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetached

`func (o *AttachDetachType) SetDetached(v bool)`

SetDetached sets Detached field to given value.

### HasDetached

`func (o *AttachDetachType) HasDetached() bool`

HasDetached returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



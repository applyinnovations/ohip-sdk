# ErrorInstance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). | [optional] 
**Title** | Pointer to **string** | Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. | [optional] 
**Status** | Pointer to **int32** | HTTP status code for this occurrence of the problem, set by the origin server. | [optional] 
**Detail** | Pointer to **string** | Human-readable description specific to this occurrence of the problem. | [optional] 
**Instance** | Pointer to **string** | Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced. | [optional] 
**OerrorCode** | Pointer to **string** | Application error code, which is different from HTTP error code. | [optional] 
**OerrorPath** | Pointer to **string** | Path to the problem at the resource or property level. | [optional] 

## Methods

### NewErrorInstance

`func NewErrorInstance() *ErrorInstance`

NewErrorInstance instantiates a new ErrorInstance object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewErrorInstanceWithDefaults

`func NewErrorInstanceWithDefaults() *ErrorInstance`

NewErrorInstanceWithDefaults instantiates a new ErrorInstance object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ErrorInstance) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ErrorInstance) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ErrorInstance) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ErrorInstance) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTitle

`func (o *ErrorInstance) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ErrorInstance) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ErrorInstance) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *ErrorInstance) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetStatus

`func (o *ErrorInstance) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ErrorInstance) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ErrorInstance) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ErrorInstance) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetDetail

`func (o *ErrorInstance) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *ErrorInstance) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *ErrorInstance) SetDetail(v string)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *ErrorInstance) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetInstance

`func (o *ErrorInstance) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ErrorInstance) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ErrorInstance) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ErrorInstance) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetOerrorCode

`func (o *ErrorInstance) GetOerrorCode() string`

GetOerrorCode returns the OerrorCode field if non-nil, zero value otherwise.

### GetOerrorCodeOk

`func (o *ErrorInstance) GetOerrorCodeOk() (*string, bool)`

GetOerrorCodeOk returns a tuple with the OerrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorCode

`func (o *ErrorInstance) SetOerrorCode(v string)`

SetOerrorCode sets OerrorCode field to given value.

### HasOerrorCode

`func (o *ErrorInstance) HasOerrorCode() bool`

HasOerrorCode returns a boolean if a field has been set.

### GetOerrorPath

`func (o *ErrorInstance) GetOerrorPath() string`

GetOerrorPath returns the OerrorPath field if non-nil, zero value otherwise.

### GetOerrorPathOk

`func (o *ErrorInstance) GetOerrorPathOk() (*string, bool)`

GetOerrorPathOk returns a tuple with the OerrorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorPath

`func (o *ErrorInstance) SetOerrorPath(v string)`

SetOerrorPath sets OerrorPath field to given value.

### HasOerrorPath

`func (o *ErrorInstance) HasOerrorPath() bool`

HasOerrorPath returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



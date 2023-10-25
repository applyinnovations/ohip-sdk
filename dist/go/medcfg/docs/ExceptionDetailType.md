# ExceptionDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Detail** | Pointer to **string** | Human-readable description specific to this occurrence of the problem. | [optional] 
**Instance** | Pointer to **string** | Absolute URI that identifies the specific occurrence of the problem.  It may or may not provide additional information if dereferenced. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**OerrorCode** | Pointer to **string** | Application error code, which is different from HTTP error code. | [optional] 
**OerrorDetails** | Pointer to [**[]ErrorInstance**](ErrorInstance.md) | Details of the error message, consisting of a hierarchical tree structure. | [optional] 
**OerrorPath** | Pointer to **string** | Path to the problem at the resource or property level. | [optional] 
**Status** | Pointer to **int32** | HTTP status code for this occurrence of the problem, set by the origin server. | [optional] 
**Title** | **string** | Short, human-readable summary of the problem.  The summary SHOULD NOT change for subsequent occurrences of the problem, except for purposes of localization. | 
**Type** | **string** | Absolute URI [RFC3986] that identifies the problem type.  When dereferenced, it SHOULD provide a human-readable summary of the problem (for example, using HTML). | 

## Methods

### NewExceptionDetailType

`func NewExceptionDetailType(title string, type_ string, ) *ExceptionDetailType`

NewExceptionDetailType instantiates a new ExceptionDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExceptionDetailTypeWithDefaults

`func NewExceptionDetailTypeWithDefaults() *ExceptionDetailType`

NewExceptionDetailTypeWithDefaults instantiates a new ExceptionDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetail

`func (o *ExceptionDetailType) GetDetail() string`

GetDetail returns the Detail field if non-nil, zero value otherwise.

### GetDetailOk

`func (o *ExceptionDetailType) GetDetailOk() (*string, bool)`

GetDetailOk returns a tuple with the Detail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetail

`func (o *ExceptionDetailType) SetDetail(v string)`

SetDetail sets Detail field to given value.

### HasDetail

`func (o *ExceptionDetailType) HasDetail() bool`

HasDetail returns a boolean if a field has been set.

### GetInstance

`func (o *ExceptionDetailType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ExceptionDetailType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ExceptionDetailType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ExceptionDetailType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetLinks

`func (o *ExceptionDetailType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExceptionDetailType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExceptionDetailType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExceptionDetailType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetOerrorCode

`func (o *ExceptionDetailType) GetOerrorCode() string`

GetOerrorCode returns the OerrorCode field if non-nil, zero value otherwise.

### GetOerrorCodeOk

`func (o *ExceptionDetailType) GetOerrorCodeOk() (*string, bool)`

GetOerrorCodeOk returns a tuple with the OerrorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorCode

`func (o *ExceptionDetailType) SetOerrorCode(v string)`

SetOerrorCode sets OerrorCode field to given value.

### HasOerrorCode

`func (o *ExceptionDetailType) HasOerrorCode() bool`

HasOerrorCode returns a boolean if a field has been set.

### GetOerrorDetails

`func (o *ExceptionDetailType) GetOerrorDetails() []ErrorInstance`

GetOerrorDetails returns the OerrorDetails field if non-nil, zero value otherwise.

### GetOerrorDetailsOk

`func (o *ExceptionDetailType) GetOerrorDetailsOk() (*[]ErrorInstance, bool)`

GetOerrorDetailsOk returns a tuple with the OerrorDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorDetails

`func (o *ExceptionDetailType) SetOerrorDetails(v []ErrorInstance)`

SetOerrorDetails sets OerrorDetails field to given value.

### HasOerrorDetails

`func (o *ExceptionDetailType) HasOerrorDetails() bool`

HasOerrorDetails returns a boolean if a field has been set.

### GetOerrorPath

`func (o *ExceptionDetailType) GetOerrorPath() string`

GetOerrorPath returns the OerrorPath field if non-nil, zero value otherwise.

### GetOerrorPathOk

`func (o *ExceptionDetailType) GetOerrorPathOk() (*string, bool)`

GetOerrorPathOk returns a tuple with the OerrorPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOerrorPath

`func (o *ExceptionDetailType) SetOerrorPath(v string)`

SetOerrorPath sets OerrorPath field to given value.

### HasOerrorPath

`func (o *ExceptionDetailType) HasOerrorPath() bool`

HasOerrorPath returns a boolean if a field has been set.

### GetStatus

`func (o *ExceptionDetailType) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ExceptionDetailType) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ExceptionDetailType) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ExceptionDetailType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTitle

`func (o *ExceptionDetailType) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ExceptionDetailType) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ExceptionDetailType) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetType

`func (o *ExceptionDetailType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ExceptionDetailType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ExceptionDetailType) SetType(v string)`

SetType sets Type field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



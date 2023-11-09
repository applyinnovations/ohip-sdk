# AttachTraceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Departments** | Pointer to [**CodeListType**](CodeListType.md) |  | [optional] 
**TraceText** | Pointer to **string** | The trace text that will be sent to the selected department(s) when Trace is selected as the Rule Type. | [optional] 

## Methods

### NewAttachTraceType

`func NewAttachTraceType() *AttachTraceType`

NewAttachTraceType instantiates a new AttachTraceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttachTraceTypeWithDefaults

`func NewAttachTraceTypeWithDefaults() *AttachTraceType`

NewAttachTraceTypeWithDefaults instantiates a new AttachTraceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepartments

`func (o *AttachTraceType) GetDepartments() CodeListType`

GetDepartments returns the Departments field if non-nil, zero value otherwise.

### GetDepartmentsOk

`func (o *AttachTraceType) GetDepartmentsOk() (*CodeListType, bool)`

GetDepartmentsOk returns a tuple with the Departments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartments

`func (o *AttachTraceType) SetDepartments(v CodeListType)`

SetDepartments sets Departments field to given value.

### HasDepartments

`func (o *AttachTraceType) HasDepartments() bool`

HasDepartments returns a boolean if a field has been set.

### GetTraceText

`func (o *AttachTraceType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *AttachTraceType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *AttachTraceType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *AttachTraceType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



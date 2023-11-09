# ForgetProfileResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanBeForgotten** | Pointer to **bool** | Indicates if the profile is eligible to be anonymized. | [optional] 
**FailureReasons** | Pointer to [**ForgetProfileFailureReasonListType**](ForgetProfileFailureReasonListType.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Status** | Pointer to [**AnonymizationStatusType**](AnonymizationStatusType.md) |  | [optional] 

## Methods

### NewForgetProfileResultType

`func NewForgetProfileResultType() *ForgetProfileResultType`

NewForgetProfileResultType instantiates a new ForgetProfileResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewForgetProfileResultTypeWithDefaults

`func NewForgetProfileResultTypeWithDefaults() *ForgetProfileResultType`

NewForgetProfileResultTypeWithDefaults instantiates a new ForgetProfileResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCanBeForgotten

`func (o *ForgetProfileResultType) GetCanBeForgotten() bool`

GetCanBeForgotten returns the CanBeForgotten field if non-nil, zero value otherwise.

### GetCanBeForgottenOk

`func (o *ForgetProfileResultType) GetCanBeForgottenOk() (*bool, bool)`

GetCanBeForgottenOk returns a tuple with the CanBeForgotten field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanBeForgotten

`func (o *ForgetProfileResultType) SetCanBeForgotten(v bool)`

SetCanBeForgotten sets CanBeForgotten field to given value.

### HasCanBeForgotten

`func (o *ForgetProfileResultType) HasCanBeForgotten() bool`

HasCanBeForgotten returns a boolean if a field has been set.

### GetFailureReasons

`func (o *ForgetProfileResultType) GetFailureReasons() ForgetProfileFailureReasonListType`

GetFailureReasons returns the FailureReasons field if non-nil, zero value otherwise.

### GetFailureReasonsOk

`func (o *ForgetProfileResultType) GetFailureReasonsOk() (*ForgetProfileFailureReasonListType, bool)`

GetFailureReasonsOk returns a tuple with the FailureReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFailureReasons

`func (o *ForgetProfileResultType) SetFailureReasons(v ForgetProfileFailureReasonListType)`

SetFailureReasons sets FailureReasons field to given value.

### HasFailureReasons

`func (o *ForgetProfileResultType) HasFailureReasons() bool`

HasFailureReasons returns a boolean if a field has been set.

### GetProfileId

`func (o *ForgetProfileResultType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ForgetProfileResultType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ForgetProfileResultType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ForgetProfileResultType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetStatus

`func (o *ForgetProfileResultType) GetStatus() AnonymizationStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ForgetProfileResultType) GetStatusOk() (*AnonymizationStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ForgetProfileResultType) SetStatus(v AnonymizationStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ForgetProfileResultType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



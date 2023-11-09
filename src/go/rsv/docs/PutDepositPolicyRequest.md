# PutDepositPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Policy** | Pointer to [**ReservationDepositPolicyCriteriaType**](ReservationDepositPolicyCriteriaType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPutDepositPolicyRequest

`func NewPutDepositPolicyRequest() *PutDepositPolicyRequest`

NewPutDepositPolicyRequest instantiates a new PutDepositPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutDepositPolicyRequestWithDefaults

`func NewPutDepositPolicyRequestWithDefaults() *PutDepositPolicyRequest`

NewPutDepositPolicyRequestWithDefaults instantiates a new PutDepositPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutDepositPolicyRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutDepositPolicyRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutDepositPolicyRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutDepositPolicyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPolicy

`func (o *PutDepositPolicyRequest) GetPolicy() ReservationDepositPolicyCriteriaType`

GetPolicy returns the Policy field if non-nil, zero value otherwise.

### GetPolicyOk

`func (o *PutDepositPolicyRequest) GetPolicyOk() (*ReservationDepositPolicyCriteriaType, bool)`

GetPolicyOk returns a tuple with the Policy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicy

`func (o *PutDepositPolicyRequest) SetPolicy(v ReservationDepositPolicyCriteriaType)`

SetPolicy sets Policy field to given value.

### HasPolicy

`func (o *PutDepositPolicyRequest) HasPolicy() bool`

HasPolicy returns a boolean if a field has been set.

### GetWarnings

`func (o *PutDepositPolicyRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutDepositPolicyRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutDepositPolicyRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutDepositPolicyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



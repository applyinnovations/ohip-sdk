# ChangeDepositPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DepositPolicy** | Pointer to [**HotelConfigDepositPoliciesType**](HotelConfigDepositPoliciesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeDepositPolicyRequest

`func NewChangeDepositPolicyRequest() *ChangeDepositPolicyRequest`

NewChangeDepositPolicyRequest instantiates a new ChangeDepositPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeDepositPolicyRequestWithDefaults

`func NewChangeDepositPolicyRequestWithDefaults() *ChangeDepositPolicyRequest`

NewChangeDepositPolicyRequestWithDefaults instantiates a new ChangeDepositPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDepositPolicy

`func (o *ChangeDepositPolicyRequest) GetDepositPolicy() HotelConfigDepositPoliciesType`

GetDepositPolicy returns the DepositPolicy field if non-nil, zero value otherwise.

### GetDepositPolicyOk

`func (o *ChangeDepositPolicyRequest) GetDepositPolicyOk() (*HotelConfigDepositPoliciesType, bool)`

GetDepositPolicyOk returns a tuple with the DepositPolicy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepositPolicy

`func (o *ChangeDepositPolicyRequest) SetDepositPolicy(v HotelConfigDepositPoliciesType)`

SetDepositPolicy sets DepositPolicy field to given value.

### HasDepositPolicy

`func (o *ChangeDepositPolicyRequest) HasDepositPolicy() bool`

HasDepositPolicy returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeDepositPolicyRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeDepositPolicyRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeDepositPolicyRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeDepositPolicyRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeDepositPolicyRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeDepositPolicyRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeDepositPolicyRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeDepositPolicyRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



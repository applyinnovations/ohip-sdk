# CommissionPaymentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionPaymentInfoList** | Pointer to [**[]CommissionPaymentInfo**](CommissionPaymentInfo.md) | Defines list of commission payment info. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCommissionPaymentDetails

`func NewCommissionPaymentDetails() *CommissionPaymentDetails`

NewCommissionPaymentDetails instantiates a new CommissionPaymentDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionPaymentDetailsWithDefaults

`func NewCommissionPaymentDetailsWithDefaults() *CommissionPaymentDetails`

NewCommissionPaymentDetailsWithDefaults instantiates a new CommissionPaymentDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionPaymentInfoList

`func (o *CommissionPaymentDetails) GetCommissionPaymentInfoList() []CommissionPaymentInfo`

GetCommissionPaymentInfoList returns the CommissionPaymentInfoList field if non-nil, zero value otherwise.

### GetCommissionPaymentInfoListOk

`func (o *CommissionPaymentDetails) GetCommissionPaymentInfoListOk() (*[]CommissionPaymentInfo, bool)`

GetCommissionPaymentInfoListOk returns a tuple with the CommissionPaymentInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionPaymentInfoList

`func (o *CommissionPaymentDetails) SetCommissionPaymentInfoList(v []CommissionPaymentInfo)`

SetCommissionPaymentInfoList sets CommissionPaymentInfoList field to given value.

### HasCommissionPaymentInfoList

`func (o *CommissionPaymentDetails) HasCommissionPaymentInfoList() bool`

HasCommissionPaymentInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *CommissionPaymentDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommissionPaymentDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommissionPaymentDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommissionPaymentDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CommissionPaymentDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommissionPaymentDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommissionPaymentDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommissionPaymentDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



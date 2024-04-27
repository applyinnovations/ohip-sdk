# PostedBillingChargesInBatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationBatchChargeInfoList** | Pointer to [**[]ReservationChargesInBatchInfoType**](ReservationChargesInBatchInfoType.md) | Information regarding charges in batch result for each reservation. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostedBillingChargesInBatch

`func NewPostedBillingChargesInBatch() *PostedBillingChargesInBatch`

NewPostedBillingChargesInBatch instantiates a new PostedBillingChargesInBatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostedBillingChargesInBatchWithDefaults

`func NewPostedBillingChargesInBatchWithDefaults() *PostedBillingChargesInBatch`

NewPostedBillingChargesInBatchWithDefaults instantiates a new PostedBillingChargesInBatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostedBillingChargesInBatch) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostedBillingChargesInBatch) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostedBillingChargesInBatch) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostedBillingChargesInBatch) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationBatchChargeInfoList

`func (o *PostedBillingChargesInBatch) GetReservationBatchChargeInfoList() []ReservationChargesInBatchInfoType`

GetReservationBatchChargeInfoList returns the ReservationBatchChargeInfoList field if non-nil, zero value otherwise.

### GetReservationBatchChargeInfoListOk

`func (o *PostedBillingChargesInBatch) GetReservationBatchChargeInfoListOk() (*[]ReservationChargesInBatchInfoType, bool)`

GetReservationBatchChargeInfoListOk returns a tuple with the ReservationBatchChargeInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationBatchChargeInfoList

`func (o *PostedBillingChargesInBatch) SetReservationBatchChargeInfoList(v []ReservationChargesInBatchInfoType)`

SetReservationBatchChargeInfoList sets ReservationBatchChargeInfoList field to given value.

### HasReservationBatchChargeInfoList

`func (o *PostedBillingChargesInBatch) HasReservationBatchChargeInfoList() bool`

HasReservationBatchChargeInfoList returns a boolean if a field has been set.

### GetWarnings

`func (o *PostedBillingChargesInBatch) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostedBillingChargesInBatch) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostedBillingChargesInBatch) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostedBillingChargesInBatch) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



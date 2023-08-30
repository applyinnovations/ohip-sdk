# GuaranteeConfigTypeMassCancellation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AutoCancel** | Pointer to **bool** | If true indicates, the reservations having this Guarantee Code will be auto canceled for which the credit card info is missing for number of days specified in pending days. | [optional] 
**PendingDays** | Pointer to **int32** | Number of days, with in which the credit card info should be received for the reservation, using this guarnatee code, to avoid auto cancellation. | [optional] 

## Methods

### NewGuaranteeConfigTypeMassCancellation

`func NewGuaranteeConfigTypeMassCancellation() *GuaranteeConfigTypeMassCancellation`

NewGuaranteeConfigTypeMassCancellation instantiates a new GuaranteeConfigTypeMassCancellation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteeConfigTypeMassCancellationWithDefaults

`func NewGuaranteeConfigTypeMassCancellationWithDefaults() *GuaranteeConfigTypeMassCancellation`

NewGuaranteeConfigTypeMassCancellationWithDefaults instantiates a new GuaranteeConfigTypeMassCancellation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAutoCancel

`func (o *GuaranteeConfigTypeMassCancellation) GetAutoCancel() bool`

GetAutoCancel returns the AutoCancel field if non-nil, zero value otherwise.

### GetAutoCancelOk

`func (o *GuaranteeConfigTypeMassCancellation) GetAutoCancelOk() (*bool, bool)`

GetAutoCancelOk returns a tuple with the AutoCancel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoCancel

`func (o *GuaranteeConfigTypeMassCancellation) SetAutoCancel(v bool)`

SetAutoCancel sets AutoCancel field to given value.

### HasAutoCancel

`func (o *GuaranteeConfigTypeMassCancellation) HasAutoCancel() bool`

HasAutoCancel returns a boolean if a field has been set.

### GetPendingDays

`func (o *GuaranteeConfigTypeMassCancellation) GetPendingDays() int32`

GetPendingDays returns the PendingDays field if non-nil, zero value otherwise.

### GetPendingDaysOk

`func (o *GuaranteeConfigTypeMassCancellation) GetPendingDaysOk() (*int32, bool)`

GetPendingDaysOk returns a tuple with the PendingDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPendingDays

`func (o *GuaranteeConfigTypeMassCancellation) SetPendingDays(v int32)`

SetPendingDays sets PendingDays field to given value.

### HasPendingDays

`func (o *GuaranteeConfigTypeMassCancellation) HasPendingDays() bool`

HasPendingDays returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



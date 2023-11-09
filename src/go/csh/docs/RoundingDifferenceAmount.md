# RoundingDifferenceAmount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RoundingDifference** | Pointer to [**RoundingDifferenceAmountType**](RoundingDifferenceAmountType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoundingDifferenceAmount

`func NewRoundingDifferenceAmount() *RoundingDifferenceAmount`

NewRoundingDifferenceAmount instantiates a new RoundingDifferenceAmount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoundingDifferenceAmountWithDefaults

`func NewRoundingDifferenceAmountWithDefaults() *RoundingDifferenceAmount`

NewRoundingDifferenceAmountWithDefaults instantiates a new RoundingDifferenceAmount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoundingDifferenceAmount) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoundingDifferenceAmount) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoundingDifferenceAmount) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoundingDifferenceAmount) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoundingDifference

`func (o *RoundingDifferenceAmount) GetRoundingDifference() RoundingDifferenceAmountType`

GetRoundingDifference returns the RoundingDifference field if non-nil, zero value otherwise.

### GetRoundingDifferenceOk

`func (o *RoundingDifferenceAmount) GetRoundingDifferenceOk() (*RoundingDifferenceAmountType, bool)`

GetRoundingDifferenceOk returns a tuple with the RoundingDifference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoundingDifference

`func (o *RoundingDifferenceAmount) SetRoundingDifference(v RoundingDifferenceAmountType)`

SetRoundingDifference sets RoundingDifference field to given value.

### HasRoundingDifference

`func (o *RoundingDifferenceAmount) HasRoundingDifference() bool`

HasRoundingDifference returns a boolean if a field has been set.

### GetWarnings

`func (o *RoundingDifferenceAmount) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoundingDifferenceAmount) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoundingDifferenceAmount) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoundingDifferenceAmount) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



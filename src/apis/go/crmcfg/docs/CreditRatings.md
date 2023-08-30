# CreditRatings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditRatings** | Pointer to [**[]CreditRatingType**](CreditRatingType.md) | List of Credit Ratings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreditRatings

`func NewCreditRatings() *CreditRatings`

NewCreditRatings instantiates a new CreditRatings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditRatingsWithDefaults

`func NewCreditRatingsWithDefaults() *CreditRatings`

NewCreditRatingsWithDefaults instantiates a new CreditRatings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditRatings

`func (o *CreditRatings) GetCreditRatings() []CreditRatingType`

GetCreditRatings returns the CreditRatings field if non-nil, zero value otherwise.

### GetCreditRatingsOk

`func (o *CreditRatings) GetCreditRatingsOk() (*[]CreditRatingType, bool)`

GetCreditRatingsOk returns a tuple with the CreditRatings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRatings

`func (o *CreditRatings) SetCreditRatings(v []CreditRatingType)`

SetCreditRatings sets CreditRatings field to given value.

### HasCreditRatings

`func (o *CreditRatings) HasCreditRatings() bool`

HasCreditRatings returns a boolean if a field has been set.

### GetLinks

`func (o *CreditRatings) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditRatings) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditRatings) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditRatings) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditRatings) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditRatings) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditRatings) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditRatings) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



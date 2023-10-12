# PutCreditRatingsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditRatings** | Pointer to [**[]CreditRatingType**](CreditRatingType.md) | List of Credit Ratings. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCreditRatingsRequest

`func NewPutCreditRatingsRequest() *PutCreditRatingsRequest`

NewPutCreditRatingsRequest instantiates a new PutCreditRatingsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCreditRatingsRequestWithDefaults

`func NewPutCreditRatingsRequestWithDefaults() *PutCreditRatingsRequest`

NewPutCreditRatingsRequestWithDefaults instantiates a new PutCreditRatingsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditRatings

`func (o *PutCreditRatingsRequest) GetCreditRatings() []CreditRatingType`

GetCreditRatings returns the CreditRatings field if non-nil, zero value otherwise.

### GetCreditRatingsOk

`func (o *PutCreditRatingsRequest) GetCreditRatingsOk() (*[]CreditRatingType, bool)`

GetCreditRatingsOk returns a tuple with the CreditRatings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditRatings

`func (o *PutCreditRatingsRequest) SetCreditRatings(v []CreditRatingType)`

SetCreditRatings sets CreditRatings field to given value.

### HasCreditRatings

`func (o *PutCreditRatingsRequest) HasCreditRatings() bool`

HasCreditRatings returns a boolean if a field has been set.

### GetLinks

`func (o *PutCreditRatingsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCreditRatingsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCreditRatingsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCreditRatingsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCreditRatingsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCreditRatingsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCreditRatingsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCreditRatingsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



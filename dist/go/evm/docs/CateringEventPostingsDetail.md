# CateringEventPostingsDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CateringEventPostings** | Pointer to [**CateringEventPostingsType**](CateringEventPostingsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PostingMasterReservations** | Pointer to [**[]BlockPostingReservationsType**](BlockPostingReservationsType.md) | Fetch block&#39;s posting account reservations information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success elementSpace to define a business error. | [optional] 

## Methods

### NewCateringEventPostingsDetail

`func NewCateringEventPostingsDetail() *CateringEventPostingsDetail`

NewCateringEventPostingsDetail instantiates a new CateringEventPostingsDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventPostingsDetailWithDefaults

`func NewCateringEventPostingsDetailWithDefaults() *CateringEventPostingsDetail`

NewCateringEventPostingsDetailWithDefaults instantiates a new CateringEventPostingsDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCateringEventPostings

`func (o *CateringEventPostingsDetail) GetCateringEventPostings() CateringEventPostingsType`

GetCateringEventPostings returns the CateringEventPostings field if non-nil, zero value otherwise.

### GetCateringEventPostingsOk

`func (o *CateringEventPostingsDetail) GetCateringEventPostingsOk() (*CateringEventPostingsType, bool)`

GetCateringEventPostingsOk returns a tuple with the CateringEventPostings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringEventPostings

`func (o *CateringEventPostingsDetail) SetCateringEventPostings(v CateringEventPostingsType)`

SetCateringEventPostings sets CateringEventPostings field to given value.

### HasCateringEventPostings

`func (o *CateringEventPostingsDetail) HasCateringEventPostings() bool`

HasCateringEventPostings returns a boolean if a field has been set.

### GetLinks

`func (o *CateringEventPostingsDetail) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CateringEventPostingsDetail) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CateringEventPostingsDetail) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CateringEventPostingsDetail) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostingMasterReservations

`func (o *CateringEventPostingsDetail) GetPostingMasterReservations() []BlockPostingReservationsType`

GetPostingMasterReservations returns the PostingMasterReservations field if non-nil, zero value otherwise.

### GetPostingMasterReservationsOk

`func (o *CateringEventPostingsDetail) GetPostingMasterReservationsOk() (*[]BlockPostingReservationsType, bool)`

GetPostingMasterReservationsOk returns a tuple with the PostingMasterReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingMasterReservations

`func (o *CateringEventPostingsDetail) SetPostingMasterReservations(v []BlockPostingReservationsType)`

SetPostingMasterReservations sets PostingMasterReservations field to given value.

### HasPostingMasterReservations

`func (o *CateringEventPostingsDetail) HasPostingMasterReservations() bool`

HasPostingMasterReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *CateringEventPostingsDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CateringEventPostingsDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CateringEventPostingsDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CateringEventPostingsDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



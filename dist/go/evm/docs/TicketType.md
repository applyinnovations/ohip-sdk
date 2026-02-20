# TicketType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TicketId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**PackageCode** | Pointer to **string** | Package Code. | [optional] 
**ReservationProductId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TicketNumber** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Description** | Pointer to **string** | Package description. | [optional] 
**IssueDate** | Pointer to **string** | Tickets issue date. | [optional] 
**Price** | Pointer to **float32** | Tickets price. | [optional] 
**ConsumptionDate** | Pointer to **string** | Tickets comsumption date. | [optional] 
**RentalCode** | Pointer to **string** | The Rate Code to which tickets belong to. | [optional] 
**Quantity** | Pointer to **int32** | Number of tickets used to create multiple tickets. | [optional] 
**Reference** | Pointer to **string** | Free text field for reference information. | [optional] 
**Status** | Pointer to **string** | The Status Code for outbound WS call. | [optional] 
**StatusDescription** | Pointer to **string** | The Status Description for outbound WS call. | [optional] 

## Methods

### NewTicketType

`func NewTicketType() *TicketType`

NewTicketType instantiates a new TicketType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTicketTypeWithDefaults

`func NewTicketTypeWithDefaults() *TicketType`

NewTicketTypeWithDefaults instantiates a new TicketType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTicketId

`func (o *TicketType) GetTicketId() UniqueIDType`

GetTicketId returns the TicketId field if non-nil, zero value otherwise.

### GetTicketIdOk

`func (o *TicketType) GetTicketIdOk() (*UniqueIDType, bool)`

GetTicketIdOk returns a tuple with the TicketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketId

`func (o *TicketType) SetTicketId(v UniqueIDType)`

SetTicketId sets TicketId field to given value.

### HasTicketId

`func (o *TicketType) HasTicketId() bool`

HasTicketId returns a boolean if a field has been set.

### GetPackageCode

`func (o *TicketType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *TicketType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *TicketType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *TicketType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetReservationProductId

`func (o *TicketType) GetReservationProductId() UniqueIDType`

GetReservationProductId returns the ReservationProductId field if non-nil, zero value otherwise.

### GetReservationProductIdOk

`func (o *TicketType) GetReservationProductIdOk() (*UniqueIDType, bool)`

GetReservationProductIdOk returns a tuple with the ReservationProductId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProductId

`func (o *TicketType) SetReservationProductId(v UniqueIDType)`

SetReservationProductId sets ReservationProductId field to given value.

### HasReservationProductId

`func (o *TicketType) HasReservationProductId() bool`

HasReservationProductId returns a boolean if a field has been set.

### GetTicketNumber

`func (o *TicketType) GetTicketNumber() UniqueIDType`

GetTicketNumber returns the TicketNumber field if non-nil, zero value otherwise.

### GetTicketNumberOk

`func (o *TicketType) GetTicketNumberOk() (*UniqueIDType, bool)`

GetTicketNumberOk returns a tuple with the TicketNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketNumber

`func (o *TicketType) SetTicketNumber(v UniqueIDType)`

SetTicketNumber sets TicketNumber field to given value.

### HasTicketNumber

`func (o *TicketType) HasTicketNumber() bool`

HasTicketNumber returns a boolean if a field has been set.

### GetDescription

`func (o *TicketType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TicketType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TicketType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TicketType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetIssueDate

`func (o *TicketType) GetIssueDate() string`

GetIssueDate returns the IssueDate field if non-nil, zero value otherwise.

### GetIssueDateOk

`func (o *TicketType) GetIssueDateOk() (*string, bool)`

GetIssueDateOk returns a tuple with the IssueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIssueDate

`func (o *TicketType) SetIssueDate(v string)`

SetIssueDate sets IssueDate field to given value.

### HasIssueDate

`func (o *TicketType) HasIssueDate() bool`

HasIssueDate returns a boolean if a field has been set.

### GetPrice

`func (o *TicketType) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *TicketType) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *TicketType) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *TicketType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetConsumptionDate

`func (o *TicketType) GetConsumptionDate() string`

GetConsumptionDate returns the ConsumptionDate field if non-nil, zero value otherwise.

### GetConsumptionDateOk

`func (o *TicketType) GetConsumptionDateOk() (*string, bool)`

GetConsumptionDateOk returns a tuple with the ConsumptionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConsumptionDate

`func (o *TicketType) SetConsumptionDate(v string)`

SetConsumptionDate sets ConsumptionDate field to given value.

### HasConsumptionDate

`func (o *TicketType) HasConsumptionDate() bool`

HasConsumptionDate returns a boolean if a field has been set.

### GetRentalCode

`func (o *TicketType) GetRentalCode() string`

GetRentalCode returns the RentalCode field if non-nil, zero value otherwise.

### GetRentalCodeOk

`func (o *TicketType) GetRentalCodeOk() (*string, bool)`

GetRentalCodeOk returns a tuple with the RentalCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRentalCode

`func (o *TicketType) SetRentalCode(v string)`

SetRentalCode sets RentalCode field to given value.

### HasRentalCode

`func (o *TicketType) HasRentalCode() bool`

HasRentalCode returns a boolean if a field has been set.

### GetQuantity

`func (o *TicketType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *TicketType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *TicketType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *TicketType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetReference

`func (o *TicketType) GetReference() string`

GetReference returns the Reference field if non-nil, zero value otherwise.

### GetReferenceOk

`func (o *TicketType) GetReferenceOk() (*string, bool)`

GetReferenceOk returns a tuple with the Reference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReference

`func (o *TicketType) SetReference(v string)`

SetReference sets Reference field to given value.

### HasReference

`func (o *TicketType) HasReference() bool`

HasReference returns a boolean if a field has been set.

### GetStatus

`func (o *TicketType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *TicketType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *TicketType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *TicketType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStatusDescription

`func (o *TicketType) GetStatusDescription() string`

GetStatusDescription returns the StatusDescription field if non-nil, zero value otherwise.

### GetStatusDescriptionOk

`func (o *TicketType) GetStatusDescriptionOk() (*string, bool)`

GetStatusDescriptionOk returns a tuple with the StatusDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDescription

`func (o *TicketType) SetStatusDescription(v string)`

SetStatusDescription sets StatusDescription field to given value.

### HasStatusDescription

`func (o *TicketType) HasStatusDescription() bool`

HasStatusDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


